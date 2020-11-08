import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'gh-activity-chart-scrapper',
  },
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    region: 'eu-central-1',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    userActivity: {
      handler: 'handler.userActivity',
      description: 'Scraps GitHub user activity chart into JSON',
      reservedConcurrency: 5,
      provisionedConcurrency: 3,
      events: [
        {
          http: {
            method: 'get',
            path: 'scrap',
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;
