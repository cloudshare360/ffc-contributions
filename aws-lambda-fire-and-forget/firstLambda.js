const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

exports.handler = async (event) => {
    const secondLambdaParams = {
        FunctionName: process.env.SECOND_LAMBDA_ARN,
        InvocationType: 'Event', // Asynchronous invocation
        Payload: JSON.stringify({ message: "Fire and Forget!" })
    };

    try {
        const response = await lambda.invoke(secondLambdaParams).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Second Lambda invoked',
                requestId: response.RequestResponse
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error invoking Second Lambda',
                error: error.message
            })
        };
    }
};
