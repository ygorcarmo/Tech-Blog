const express = require('express');


// sequelize db connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// express server
const app = express();
const PORT = process.env.PORT || 3001;


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });