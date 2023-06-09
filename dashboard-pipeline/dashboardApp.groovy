pipeline {
    agent any
    
    stages {
        stage ('Checkout') {
            steps {
                git url: 'https://github.com/Rcasas14/dashboard-project.git', branch: 'master'
            }
        }
        stage('Build') {
            steps {
                sh 'rm -rf *tar.gz'
                sh 'npm install'
                sh 'tar czf dashboard-app-$BUILD_NUMBER.tar.gz node_modules dashb-config.js package.json public src'
            }
        }
        stage('Deploy'){
            steps {
                sh 'npm start'
            }

            post {
                always {
                    archiveArtifacts 'dashboard-app-*.tar.gz'
                }
            }
        }
    }
}