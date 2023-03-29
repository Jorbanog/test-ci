pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'docker -v'
                sh 'npm i'
                sh 'docker-compose version'
                sh 'npm run test'
            }
        }

        stage('Unit test') {
                steps {
                    echo 'daaaa'
                }
        }
    }
}