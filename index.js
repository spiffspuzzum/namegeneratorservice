const express = require("express");
const app = express();

require("./startup/config")();
require('./startup/prod')(app);
require("./startup/routes")(app);
require("./startup/database")();

//Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
