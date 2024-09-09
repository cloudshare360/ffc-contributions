
exports.handler = async (event) => {
    console.log('Lambda 2 invoked with event:', event);
    console.log('Start of Execution:', new Date().toISOString(), "invocationId", event.invocationId);
    for (let i = 1; i <= 100000; i++) {
        console.log(`Iteration ${i}: This is a message.`);
    }
    console.log('end  of Execution:', new Date().toISOString(), "invocationId", event.invocationId);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Lambda 2 executed successfully! ${new Date().toISOString()}`,  })
    };
};
