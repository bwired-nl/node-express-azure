const express = require('express');
const app = express();
var port = process.env.port || 3000;

app.get('/', (req, res) => res.send("Hello Nerds!"));
app.listen (port, () => console.log('Server is running on port: ' + port));

