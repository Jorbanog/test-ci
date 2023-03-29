node {
    stage ('Test') {
        try {
            sh 'docker-compose version'
            sh 'docker-compose up'
        } finally {
            sh "docker-compose down"
        }
    }
    stage('kek') {
        sh 'kek'
    }
}