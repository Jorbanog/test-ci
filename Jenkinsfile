node {
    checkout scm

    stage('unit') {
        try {
            sh 'docker-compose up --build --abort-on-container-exit --exit-code-from node_test'
        } finally {
            sh 'docker-compose down'
        }
    }

}