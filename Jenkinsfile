pipeline {
    agent any
    stages {
        stage('Test') {
            try {
                sh 'docker-compose up'
            } finally {
                    sh "docker-compose down"
            }
            steps {
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