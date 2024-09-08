
const { loggingMiddleware } = require('../middleware/loggingMiddleware');

exports.handler = loggingMiddleware(async (event) => {
    const itemId = event.pathParameters.id;
    // Simulate item update
    console.log('Updating item:', itemId);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item updated', itemId: itemId })
    };
});
