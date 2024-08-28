
let items = {};

exports.saveItem = async (item) => {
    const id = new Date().toISOString();
    items[id] = item;
    return { id, ...item };
};

exports.getItem = async (id) => {
    return items[id];
};

exports.updateItem = async (id, item) => {
    items[id] = item;
    return { id, ...item };
};

exports.deleteItem = async (id) => {
    delete items[id];
};
