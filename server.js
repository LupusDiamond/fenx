const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;

// Routes
const authRoute = require('./src/routes/auth');
const dashboardRoute = require("./src/routes/dashboard");

const app = express();

// Middleware Routes
app.use('/', authRoute);
app.use('/dashboard', dashboardRoute);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
/*app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/

app.listen(port);