pipeline {
    agent any
    stages {
        stage('Test') {
            try {
                sh 'docker-compose version'

                sh 'docker-compose up'
                
            } finally {
                    sh "docker-compose down"
            }
        }

        stage('Unit test') {
                steps {
                    echo 'daaaa'
                }
        }
    }
}