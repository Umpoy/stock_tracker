const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

require('./app/routes.js')(app);

app.listen(port, () => {
    console.log(`Port running on localhost: ${port}`);
})