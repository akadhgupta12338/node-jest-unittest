const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);
app.listen(2020, () => console.log('server listening on port 2020'));
