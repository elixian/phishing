@Library("shared-libs/cnav-pipeline-libs@1.0.2") _
import cnav.ptn.*

pipeline {
  agent none

  options {
    timeout(time: 1, unit: 'HOURS')
    disableConcurrentBuilds()
  }

  parameters {
    string(name: 'VERSION', defaultValue: '1.0.0', description: 'Version à déployer')
    booleanParam(name: 'integration', defaultValue: false, description: 'Deployer le produit en intégration')
    booleanParam(name: 'production', defaultValue: false, description: 'Deployer le produit en production')
  }

  stages {
    stage('Build') {
      agent {
        label 'organicnav-int'
      }
      steps {
        sh """
          docker-compose build --build-arg http_proxy=http://proxy-ul.dev.n18.an.cnav:8080 --build-arg https_proxy=http://proxy-ul.dev.n18.an.cnav:8080
          docker-compose push
        """
      }
    }

    stage('Integration') {
      agent {
        label 'organicnav-int'
      }
      when { branch 'develop' }
      steps {
        sh "./release.sh ${params.VERSION}"
      }
    }

    stage('Production') {
      agent {
        label 'organicnav-prod'
      }
      when { branch 'master' }
      steps {
        sh "./release.sh ${params.VERSION}"
      }
    }
  }

  post {
    changed {
      script {
        cnavNotif 'franck.colombo@cnav.fr'
      }
    }
  }
}
