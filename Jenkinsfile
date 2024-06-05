pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'c1867532-75be-49ff-ad27-a5d29d6aa100' // Usar el ID del conjunto de credenciales correcto
        IMAGE_NAME = 'cescobar37/imagen_prueba_1'
        VERSION = 'v1.0.0'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/cjescobar37/api_personas.git'
            }
        }

        stage('Lint Dockerfile') {
            steps {
                sh 'hadolint Dockerfile'
            }
        }

        stage('Build Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${VERSION}")
                }
            }
        }

        stage('Unit Tests') {
            steps {
                sh "docker run --rm ${IMAGE_NAME}:${VERSION} ./run-unit-tests.sh"
            }
        }

        stage('Integration Tests') {
            steps {
                sh "docker run --rm ${IMAGE_NAME}:${VERSION} ./run-integration-tests.sh"
            }
        }

        stage('Publish Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKERHUB_CREDENTIALS}") {
                        docker.image("${IMAGE_NAME}:${VERSION}").push()
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
