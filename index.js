const connection = require("./config");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
