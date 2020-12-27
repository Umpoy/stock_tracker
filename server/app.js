const express = require('express');
const app = express();
const port = 5000;

require('./app/routes.js')(app);

app.listen(port, () => {
    console.log(`Port running on localhost: ${port}`);
})