
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const { v4: uuidv4 } = require('uuid');
/*

{
  "invocationType": "RequestResponse",
  "functionName": "aws-sam-lambda-lambda-app-one-Lambda2Function-IqRL2Fx2gh6z"
}

*/

exports.handler = async (event) => {
    console.log("Start of Lambda 1")
    console.log("Input Request", "event", JSON.stringify(event));
    const newUuid = uuidv4();
  console.log("invocation id", newUuid);
  event.invocationId = newUuid;
    
    const invocationType = event.invocationType || 'RequestResponse'; // 'RequestResponse' for sync, 'Event' for async
    const functionName = event.functionName;
    const params = {
        FunctionName: process.env.LAMBDA_2_NAME, // Replace with actual Lambda 2 name
        InvocationType: invocationType, // 'RequestResponse' for sync, 'Event' for async
        Payload: JSON.stringify({ key1: 'Invoking from Lambda to Lambda', "invocationId":  newUuid}) // Add payload if necessary
    };
    console.log("params", JSON.stringify(params));

    try {
        // if (invocationType === 'RequestResponse') {
        //     console.log("RequestResponse block")
        //     console.log("Synchronous invocation, wait for response")
        //     // Synchronous invocation, wait for response
        //     const response = await lambda.invoke(params).promise();
        //     console.log('Lambda 2 response:', response);
        //     return response;
        // } else {
            // Asynchronous invocation, return execution ID
            let response = `lambda is invoked with Lambda Params :${JSON.stringify(params)}`;
            console.log("else block")
            console.log("Before Lambda 2 invoked asynchronously with invocationId", newUuid );
            await lambda.invoke(params).promise();
            console.log("after Lambda 2 invoked asynchronously with invocationId", newUuid );
            return {
                statusCode: 202,
                body: JSON.stringify(response)
            };
        //}
    } catch (error) {
        console.error('Error invoking Lambda 2:', error);
        throw error;
    }
};
