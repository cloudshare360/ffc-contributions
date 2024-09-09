const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const { v4: uuidv4 } = require('uuid');


// Function to invoke BackgroundLambda with timeout
function invokeBackgroundLambdaWithTimeout(params, timeoutDuration) {
  return new Promise((resolve, reject) => {
    console.log("start of invokeBackgroundLambdaWithTimeout");
    const timer = setTimeout(() => {
      console.error(`Background Lambda invocation timed out after ${timeoutDuration}ms`);
      reject(new Error('Invocation timed out'));
    }, timeoutDuration);
    console.log("Invoking  of lambda with params", "params", JSON.stringify(params));
    lambda.invoke(params).promise()
      .then((data) => {
        clearTimeout(timer); // Clear the timeout if successful
        console.log('Background Lambda invoked asynchronously:', data);
        resolve(data);
      })
      .catch((err) => {
        clearTimeout(timer); // Clear the timeout in case of an error
        console.error('Error invoking Background Lambda:', err);
        reject(err);
      });
      console.log("end of invokeBackgroundLambdaWithTimeout");
  });
}

exports.handler = async (event) => {
  console.log('Caller Lambda started.');
  const newUuid = uuidv4();
  console.log("invocation id", newUuid);
  event.invocationId = newUuid;

  // Define the parameters for invoking BackgroundLambda
  const params = {
    FunctionName: process.env.BACKGROUND_LAMBDA_ARN,  // ARN of the background Lambda
    InvocationType: 'Event',  // Fire-and-forget invocation
    Payload: JSON.stringify({
      message: 'Fire-and-forget task from callerLambda',
      eventDetails: event,
    })
  };

  // Set a timeout duration for the background invocation (e.g., 3 seconds)
  const timeoutDuration = 3000;

  // Invoke Background Lambda with timeout, but don't await it
  invokeBackgroundLambdaWithTimeout(params, timeoutDuration)
    .catch(err => console.error('Error or timeout during Background Lambda invocation:', err));

  // Immediately return the response without waiting for the background task
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Caller Lambda completed, background task invoked asynchronously. invokeBackgroundLambdaWithTimeout 3000',
    })
  };
};
