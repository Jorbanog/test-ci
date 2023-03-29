pipeline {
    agent any
    stages {
        stage('Test') {
            PrintStage()
            steps {
                sh 'node --version'
                sh 'docker -v'
                sh 'docker-compose version'
                sh 'docker-compose up'
            }
        }

        stage('Unit test') {
                steps {
                    sh 'docker-compose down'
                    echo 'daaaa'

                }
        }
    }
}