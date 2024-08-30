
const { deleteItem } = require('../models/items');

exports.handler = async (event) => {
    const { id } = event.pathParameters;
    await deleteItem(id);
    return {
        statusCode: 204,
    };
};
