const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const db = require('./models');

// ROUTES
const task = require('./routes/task');

app.use('/task', task);

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log('running on', PORT);
})