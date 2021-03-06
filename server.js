const express = require("express");
const exphbs = require("express-handlebars");
const chalk = require("chalk");

const routes = require("./controllers/controller.js");
const db = require("./models");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



//FORCE FALSE BECAUSE WE DON'T WANT THE TABLE TO DROP IT'S DATA EVERYTIME SERVER RESTARTS
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(chalk.green(`APP LISTENING: ${PORT}`));
    });
});