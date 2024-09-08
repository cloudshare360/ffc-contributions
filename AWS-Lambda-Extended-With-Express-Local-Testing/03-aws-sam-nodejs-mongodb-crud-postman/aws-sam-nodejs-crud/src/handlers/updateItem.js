
const { updateItem } = require('../models/items');

exports.handler = async (event) => {
    const { id } = event.pathParameters;
    const item = JSON.parse(event.body);
    const updatedItem = await updateItem(id, item);
    return {
        statusCode: 200,
        body: JSON.stringify(updatedItem),
    };
};
