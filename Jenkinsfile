pipeline {
    agent {
        docker {
             image 'node:16.13.1-alpine'
             args '-u root:root'
            }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm cache clean'
                sh 'npm i'
                sh 'npm run test'
            }
        }
    }
}