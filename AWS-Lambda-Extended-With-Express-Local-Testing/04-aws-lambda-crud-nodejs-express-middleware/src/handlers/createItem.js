
const { loggingMiddleware } = require('../middleware/loggingMiddleware');

exports.handler = loggingMiddleware(async (event) => {
    // Simulate item creation
    console.log('Creating item:', event.body);
    return {
        statusCode: 201,
        body: JSON.stringify({ message: 'Item created', data: event.body })
    };
});
