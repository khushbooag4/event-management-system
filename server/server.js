const express = require('express');
const route = require('./routes/route');
const path = require('path');
const bodyParser = require('body-parser');
require('./config/db')
const app = express();

app.use(route);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', 'index.html')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});     