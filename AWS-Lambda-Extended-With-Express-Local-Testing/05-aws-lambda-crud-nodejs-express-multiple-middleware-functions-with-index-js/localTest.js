
const express = require('express');
const bodyParser = require('body-parser');
const { handler: createHandler } = require('./handlers/createItem');
const { handler: readHandler } = require('./handlers/readItem');
const { handler: updateHandler } = require('./handlers/updateItem');
const { handler: deleteHandler } = require('./handlers/deleteItem');

const app = express();
app.use(bodyParser.json());

app.post('/items', (req, res) => createHandler({ body: JSON.stringify(req.body) }, {}).then(response => res.status(response.statusCode).send(response.body)));
// middleware functions
app.post('/items', (req, res) => createHandler({ body: JSON.stringify(req.body) }, {}).then(response => res.status(response.statusCode).send(response.body)));

app.get('/items/:id', (req, res) => readHandler({ pathParameters: { id: req.params.id } }, {}).then(response => res.status(response.statusCode).send(response.body)));
app.put('/items/:id', (req, res) => updateHandler({ pathParameters: { id: req.params.id }, body: JSON.stringify(req.body) }, {}).then(response => res.status(response.statusCode).send(response.body)));
app.delete('/items/:id', (req, res) => deleteHandler({ pathParameters: { id: req.params.id } }, {}).then(response => res.status(response.statusCode).send()));

app.listen(3000, () => console.log('Local Express server running on http://localhost:3000'));

module.exports = app;
