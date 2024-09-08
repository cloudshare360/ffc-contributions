
const express = require('express');
const bodyParser = require('body-parser');
const { handler: createItem } = require('./src/handlers/createItem');
const { handler: readItem } = require('./src/handlers/readItem');
const { handler: updateItem } = require('./src/handlers/updateItem');
const { handler: deleteItem } = require('./src/handlers/deleteItem');

const app = express();

app.get('/items', (req, res) => {
    const event = {};
    getAllItems(event).then(response => res.status(response.statusCode).send(response.body));
});

app.use(bodyParser.json());

app.post('/items', (req, res) => {
    const event = { body: JSON.stringify(req.body) };
    createItem(event).then(response => res.status(response.statusCode).send(response.body));
});

app.get('/items/:id', (req, res) => {
    const event = { pathParameters: { id: req.params.id } };
    readItem(event).then(response => res.status(response.statusCode).send(response.body));
});

app.put('/items/:id', (req, res) => {
    const event = { pathParameters: { id: req.params.id }, body: JSON.stringify(req.body) };
    updateItem(event).then(response => res.status(response.statusCode).send(response.body));
});

app.delete('/items/:id', (req, res) => {
    const event = { pathParameters: { id: req.params.id } };
    deleteItem(event).then(response => res.status(response.statusCode).send(response.body));
});

app.listen(3000, () => {
    console.log('Express server running on http://localhost:3000');
});
