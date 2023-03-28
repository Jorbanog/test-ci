pipeline {
    agent none
    stages {
        stage('Test') {
            agent any
            steps {
                sh 'docker -v'
                sh 'docker-compose version'
                sh 'docker-compose up -d'
            }
        }

        stage('Unit test') {
                steps {
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm ci'
                    sh 'npm run test'
                }
        }
    }
}