const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  console.log('Caller Lambda started.');

  // Define the parameters for invoking background Lambda
  const params = {
    FunctionName: process.env.BACKGROUND_LAMBDA_ARN,  // ARN of the background Lambda
    InvocationType: 'Event',  // Fire-and-forget invocation
    Payload: JSON.stringify({
      message: 'Fire-and-forget task from callerLambda',
      timestamp: new Date().toISOString(),
    })
  };

  // Fire-and-forget: Invoke backgroundLambda without waiting for its result
  lambda.invoke(params).promise()
    .then(() => {
      console.log('Background Lambda invoked asynchronously.');
    })
    .catch((err) => {
      console.error('Error invoking background Lambda:', err);
    });

  // Return immediately after invoking background Lambda
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Caller Lambda completed, background task running.' })
  };
};
