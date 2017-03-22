const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const db = require('./models');
const bodyParser = require('body-parser');

// ROUTES
const task = require('./routes/task');

app.use(bodyParser.urlencoded({ extended : true }));

app.use('/task', task);



app.listen(PORT, () => {
  db.sequelize.sync();
  console.log('running on', PORT);
})