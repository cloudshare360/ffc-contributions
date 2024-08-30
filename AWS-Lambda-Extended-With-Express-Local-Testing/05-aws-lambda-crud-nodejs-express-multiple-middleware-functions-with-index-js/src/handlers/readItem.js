
const { loggingMiddleware } = require('../middleware/loggingMiddleware');

exports.handler = loggingMiddleware(async (event) => {
    const itemId = event.pathParameters.id;
    // Simulate item reading
    console.log('Reading item:', itemId);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item found', itemId: itemId })
    };
});
