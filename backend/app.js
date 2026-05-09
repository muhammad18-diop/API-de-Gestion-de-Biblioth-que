const express = require("express");
const cors = require("cors")
const app = express();
const livresRoutes = require("./routes/livres.routes")
const UsersRoutes = require("./routes/user.routes")

app.use(cors());
app.use(express.json())

app.use("/livres", livresRoutes);
app.use("/inscription", UsersRoutes);






module.exports = app;