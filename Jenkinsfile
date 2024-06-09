pipeline {
    agent any
   
    stages{
        stage('Clone Repository'){
            steps{
                git 'https://github.com/cjescobar37/api_personas'
            }
        }

        stage('Build Docker Image'){
            steps{
                script {
                    sh '/usr/local/bin/docker build -t api-personas-test .'
                }
            }
        }

        stage('Build Docker Container'){
            steps{
                script {
                    sh '/usr/local/bin/docker run -p 8090:80 api-personas-test .'
                }
            }
        }


    }
}
