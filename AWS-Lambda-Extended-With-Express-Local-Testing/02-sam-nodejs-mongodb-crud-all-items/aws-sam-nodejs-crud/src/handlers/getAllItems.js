
const { getAllItems } = require('../models/items');

exports.handler = async (event) => {
    const items = await getAllItems();
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
};
