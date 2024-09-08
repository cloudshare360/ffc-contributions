exports.getAllItemsHandler = async (event, context) => {
    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" }
    ];
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
};
