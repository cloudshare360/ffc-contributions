
exports.handler = async (event) => {
    console.log('Lambda 2 invoked with event:', event);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Lambda 2 executed successfully! ${new Date().toISOString()}`,  })
    };
};
