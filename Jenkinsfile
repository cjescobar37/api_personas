pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('c1867532-75be-49ff-ad27-a5d29d6aa100')
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
                    docker.build("${env.IMAGE_NAME}:${VERSION}")
                }
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'docker run --rm ${env.IMAGE_NAME}:${VERSION} ./run-unit-tests.sh'
            }
        }

        stage('Integration Tests') {
            steps {
                sh 'docker run --rm ${env.IMAGE_NAME}:${VERSION} ./run-integration-tests.sh'
            }
        }

        stage('Publish Image') {
            steps {
                script {
                    docker.withRegistry('', "${DOCKERHUB_CREDENTIALS}") {
                        docker.image("${env.IMAGE_NAME}:${VERSION}").push()
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
