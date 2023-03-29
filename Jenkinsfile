node {
    checkout scm

    stage('unit') {
        try {
            sh 'docker-compose up'
        }finally {
            sh 'docker-compose down'
        }
    }

    

}