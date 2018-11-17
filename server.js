'use strict';

//Load Express
const express = require('express');

//Instantiate Express os it's usable
const app = express();

// Designate a port on which to serve our app
const PORT = process.env.PORT || 3000;

// Define which directory that we will server files from
app.use(express.static('./public'));

// Tell the app to listen
app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));



