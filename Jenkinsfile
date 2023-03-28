pipeline {
    stages {
        stage('Test') {
            agent any
            steps {
                sh 'docker -v'
                sh 'docker-compose version'
            }
        }

        stage('Unit test') {
            agent {
                docker {
                    image 'node:16.13.1-alpine'
                    args '-u root:root'
                }
            }
                steps {
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm ci'
                    sh 'npm run test'
                }
        }
    }
}