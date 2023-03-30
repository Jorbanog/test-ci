node {
    checkout scm

    stage('unit') {
            sh 'docker-compose up --build --abort-on-container-exit --exit-code-from node_test'
            sh 'docker-compose down'
    }

}