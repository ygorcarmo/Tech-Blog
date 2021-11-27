const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });