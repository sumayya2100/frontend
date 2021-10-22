pipeline {
  agent any
  environment {
 		String result=’0.0.0';
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-sum-creds')
	}
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t sumayya2100/ss-app-fe:latest .'
      }
    }
    stage('Login') {
      steps {
      sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}
		stage('Push') {
			steps {
				sh 'docker push sumayya2100/ss-app-fe:latest'
			}
		stage('Auto tagging') { 
			steps {
				 script {
			 sh “”” 
version=\$(git describe — tags `git rev-list — tags — max-count=1`)
#Version to get the latest tag 
A=”\$(echo \$version|cut -d ‘.’ -f1)”
B=”\$(echo \$version|cut -d ‘.’ -f2)”
C=”\$(echo \$version|cut -d ‘.’ -f3)”
 if [ \$C -gt 8 ]
 then 
if [ \$B -gt 8 ]
 then
 A=\$((A+1))
 B=0 C=0 
else
B=\$((B+1))
 C=0
 fi
 else
 C=\$((C+1))
 fi
echo “A[\$A.\$B.\$C]”>outFile “””
nextVersion = readFile ‘outFile’ 
echo “we will tag ‘${nextVersion}’” 
result =nextVersion.substring(nextVersion.indexOf(“[“)+1,nextVersion.indexOf(“]”);
echo “we will tag ‘${result}’”
		}
	}
	post {
		always {
			sh 'docker logout'
		}
	}

}
