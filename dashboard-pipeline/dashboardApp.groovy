pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20.3.0'
    }
    
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
                sh 'tar czf dashboard-app-$BUILD_NUMBER.tar.gz node_modules dash-config.js package.json public src'
            }
        

            post {
                always {
                    archiveArtifacts 'dashboard-app-*.tar.gz'
                // }

                // changed {
                    emailext attachLog: true, body: 'Please go to ${BUILD_URL} and verify the build', compressLog: true, subject: 'Job \'${JOB_NAME}\' (${BUILD_NUMBER}) is waiting for input', to: 'rcasas@axxess.com'
                }
            }
        }
    }
}