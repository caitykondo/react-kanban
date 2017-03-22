const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const db = require('./models');

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log('running on', PORT);
})