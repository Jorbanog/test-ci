pipeline {
    agent any
    stages {
        stage('Test') {
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
                    sh 'npm run test'
                    sh 'docker-compose down'
                }
        }
    }
}