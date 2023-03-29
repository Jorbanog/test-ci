node {
    checkout scm

    stage('unit') {
        try {
            sh 'docker-compose up'
        }catch {
            sh 'docker-compose down'
        }
    }

}