pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'docker -v'
                sh 'docker-compose version'
            }
        }
    }
}