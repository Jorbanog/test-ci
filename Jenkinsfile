node {
    checkout scm

    docker.image('postgres:alpine') {
        docker.image('node:16.13.1-alpine').inside {
            sh 'node -v'
        }
    }
    
}