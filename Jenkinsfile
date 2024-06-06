pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS_ID = 'c1867532-75be-49ff-ad27-a5d29d6aa100' 
        DOCKERHUB_REPOSITORY = 'cescobar37/devopsprueba1'
        IMAGE_NAME = 'cescobar37/devopsprueba1:latest'
        GIT_CREDENTIALS_ID = 'a0ef1ab7-ddcc-42cd-a344-afa613eaf64e'
        TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                     git url: 'https://github.com/cescobar37/api_personas.git', branch: 'main', credentialsId: "${GIT_CREDENTIALS_ID}"
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKERHUB_REPOSITORY}:${TAG}")
                }
            }
        }
        stage('Lint Dockerfile') {
            steps {
                script {
                    def hadolintPath = 'C:\\util\\hadolint.exe'
                    def dockerfilePath = "${WORKSPACE}\\Dockerfile"

                    bat "${hadolintPath} ${dockerfilePath}"
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    dockerImage.run("-d -p 8080:80")
                }
            }
        }
        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS_ID) {
                        dockerImage.push("${TAG}")
                    }
                }
            }
        }
    }
}
