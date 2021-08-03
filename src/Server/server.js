const express = require("express"),
app = express();
const { appRoutes } = require("./routes/routes.js");

app.use("/", appRoutes);
const port = 3131;
app.listen(port, () => {
});