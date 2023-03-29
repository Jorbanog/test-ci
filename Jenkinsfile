node {
    checkout scm

    docker.image('node:16.13.1-alpine').inside {
        sh 'node -v'
    }

    docker.image('postgres:alpine').inside {
        sh 'psql'
    }

}