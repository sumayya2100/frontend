pipeline {
  agent any
  environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-sum-creds')
	}
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t frontend/ss-app:latest .'
      }
    }
    stage('Login') {
      steps {
      sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}
		stage('Push') {
			steps {
				sh 'docker push frontend/ss-app:latest'
			}
		}
	}
	post {
		always {
			sh 'docker logout'
		}
	}

}
