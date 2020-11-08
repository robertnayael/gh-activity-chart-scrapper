import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const userActivity: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: 'GitHub activity chart scrapper result',
  };
};
