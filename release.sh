#!/bin/bash -x

# extract version from args
export VERSION=$1
if [ "$VERSION" = "" ]
then
  echo "A version must be specified"
  exit 1
fi

# run images
if docker stack ls --format "{{.Name}}" | grep phishing | grep blue
then
  OLDCOLOR=blue
  export NEWCOLOR=green
else
  OLDCOLOR=green
  export NEWCOLOR=blue
fi
docker stack deploy -c docker-stack.yml phishing-${NEWCOLOR}

# wait for images to be handled by Traefik
sleep 60

# Increase newer version Traefik priority
docker service update --label-add "traefik.http.routers.phishing-${NEWCOLOR}.priority=1000" phishing-${NEWCOLOR}_ui

# wait for updates to be handled by Traefik
sleep 60

# destroy old version
docker stack rm phishing-${OLDCOLOR}

# Restore default Traefik priority
docker service update --label-add "traefik.http.routers.phishing-${NEWCOLOR}.priority=100" phishing-${NEWCOLOR}_ui
