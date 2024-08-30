
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myDatabase';

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('items');

        module.exports.saveItem = async (item) => {
            const result = await collection.insertOne(item);
            return result.ops[0];
        };

        module.exports.getItem = async (id) => {
            return await collection.findOne({ _id: id });
        };

        module.exports.updateItem = async (id, item) => {
            await collection.updateOne({ _id: id }, { $set: item });
            return { _id: id, ...item };
        };

        module.exports.deleteItem = async (id) => {
            await collection.deleteOne({ _id: id });
        };
    } catch (err) {
        console.log(err);
    }
}

main().catch(console.error);
