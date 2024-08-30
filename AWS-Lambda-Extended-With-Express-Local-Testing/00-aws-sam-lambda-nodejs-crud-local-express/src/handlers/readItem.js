
const { getItem } = require('../models/items');

exports.handler = async (event) => {
    const { id } = event.pathParameters;
    const item = await getItem(id);
    if (item) {
        return {
            statusCode: 200,
            body: JSON.stringify(item),
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Item not found' }),
        };
    }
};
