
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

exports.handler = async (event) => {
    const invocationType = event.invocationType || 'RequestResponse'; // 'RequestResponse' for sync, 'Event' for async
    const params = {
        FunctionName: 'Lambda2FunctionName', // Replace with actual Lambda 2 name
        InvocationType: invocationType, // 'RequestResponse' for sync, 'Event' for async
        Payload: JSON.stringify({ key1: 'value1' }) // Add payload if necessary
    };

    try {
        if (invocationType === 'RequestResponse') {
            // Synchronous invocation, wait for response
            const response = await lambda.invoke(params).promise();
            console.log('Lambda 2 response:', response);
            return response;
        } else {
            // Asynchronous invocation, return execution ID
            const response = await lambda.invoke(params).promise();
            console.log('Lambda 2 invoked asynchronously, execution ID:', response.ResponseMetadata.RequestId);
            return {
                statusCode: 202,
                body: JSON.stringify({ executionId: response.ResponseMetadata.RequestId })
            };
        }
    } catch (error) {
        console.error('Error invoking Lambda 2:', error);
        throw error;
    }
};
