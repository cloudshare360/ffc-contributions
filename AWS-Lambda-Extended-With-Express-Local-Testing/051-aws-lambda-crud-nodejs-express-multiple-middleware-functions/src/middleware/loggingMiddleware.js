
exports.loggingMiddleware = (handler) => async (event, context) => {
    console.log('Middleware processing:', event);
    return handler(event, context);
};
