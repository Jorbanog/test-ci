pipeline {
    agent none

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Docker node test') {
            agent {
                docker {
                    image 'node:16'
                }
            }
            steps {
                // Steps run in node:7-alpine docker container on docker agent
                sh 'node --version'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}