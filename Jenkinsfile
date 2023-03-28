pipeline {
    agent none
    stages {
        stage('Test') {
            agent any
            steps {
                sh 'docker -v'
                sh 'docker-compose version'
            }
        }

        stage('Unit test') {
            agent any
                steps {
                    agent {
                        docker {
                            image 'node:16.13.1-alpine'
                            args '-u root:root'
                        }
                    }
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm ci'
                }

                steps {
                    agent {
                        docker { 
                            image 'node:16.13.1-alpine'
                            args '-u root:root'
                        }
                    }
                    sh 'npm run test'
                }
        }
    }
}