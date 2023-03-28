pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Docker node test') {
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