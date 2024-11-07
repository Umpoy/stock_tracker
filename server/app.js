const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 5001;

app.use(cors());

require("./app/routes.js")(app);

app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
  console.log(`Port running on localhost: ${port}`);
});
