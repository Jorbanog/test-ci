pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'docker -v'
                sh 'npm i'
                sh 'docker-compose version'
            }
        }

        stage('Unit test') {
                steps {
                    echo 'daaaa'
                }
        }
    }
}