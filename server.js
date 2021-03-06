const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8000);
console.log(`Listening on port: ${process.env.PORT || 8000}`);
