node {
    checkout scm

    stage('unit') {
            sh 'docker-compose up'
            sh 'docker-compose down'
    }

}