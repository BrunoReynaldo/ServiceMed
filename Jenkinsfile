pipeline {
    agent any

    stages {

        stage('Clonar Projeto') {
            steps {
                git branch: 'main', url: 'https://github.com/BrunoReynaldo/ServiceMed.git'
            }
        }

        stage('Build Docker') {
            steps {
                bat 'docker build -t site-social .'
            }
        }

        stage('Remover Container Antigo') {
            steps {
                bat 'docker rm -f site-social || exit 0'
            }
        }

        stage('Subir Novo Container') {
            steps {
                bat 'docker run -d -p 8081:80 --name site-social site-social'
            }
        }
    }
}