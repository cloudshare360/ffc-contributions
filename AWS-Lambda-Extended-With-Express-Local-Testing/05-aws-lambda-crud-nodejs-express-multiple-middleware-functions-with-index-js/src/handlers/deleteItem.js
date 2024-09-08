
const { loggingMiddleware } = require('../middleware/loggingMiddleware');

exports.handler = loggingMiddleware(async (event) => {
    const itemId = event.pathParameters.id;
    // Simulate item deletion
    console.log('Deleting item:', itemId);
    return {
        statusCode: 204
    };
});
