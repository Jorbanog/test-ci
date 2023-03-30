node {
    checkout scm

    stage('unit') {
        try {
            sh 'docker-compose --env-file ./.env.test up --build --abort-on-container-exit --exit-code-from node_test'
        } finally {
            sh 'docker-compose --env-file ./.env.test down'
        }
    }

}