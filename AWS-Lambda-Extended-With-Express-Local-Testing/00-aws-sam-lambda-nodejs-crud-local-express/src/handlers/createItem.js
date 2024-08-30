
const { saveItem } = require('../models/items');

exports.handler = async (event) => {
    const item = JSON.parse(event.body);
    const savedItem = await saveItem(item);
    return {
        statusCode: 201,
        body: JSON.stringify(savedItem),
    };
};
