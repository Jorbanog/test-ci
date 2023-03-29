node {
    checkout scm

    docker.image('node:16.13.1-alpine').inside {
        docker.image('postgres:alpine').inside {
            sh 'psql'
        }
    }
    
}