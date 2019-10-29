require("dotenv").config();

const express = require("express"),
      app     = express();
      mongoose = require("mongoose"),
      bodyParser = require("body-parser");
      middlware = require("./middleware/index");

const indexRoute= require("./routes/index");

mongoose.connect(process.env.DATABASEURL,{useUnifiedTopology:true, useNewUrlParser:true});
mongoose.set("useFindAndModify",false);
mongoose.set("useCreateIndex",true);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

middlware(app);

app.use("/",indexRoute);

app.listen(process.env.PORT || 3000)
{
    console.log("server started");
}