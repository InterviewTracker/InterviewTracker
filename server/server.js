const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
