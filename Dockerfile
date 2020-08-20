# build
FROM node:10.15.3 AS builder
WORKDIR /workdir
COPY . /workdir
RUN yarn install
RUN yarn build --prod

# run
FROM nginx:1.14.2
COPY appli-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workdir/dist /usr/share/nginx/html
