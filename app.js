require("dotenv").config();

const express = require("express"),
      app     = express();
      mongoose = require("mongoose");

mongoose.connect(process.env.DATABASEURL,{useUnifiedTopology:true, useNewUrlParser:true});
mongoose.set("useFindAndModify",false);
mongoose.use("useCreateIndex",true);

app.use("view engine", "ejs");

app.listen(process.env.PORT || 3000){
    console.log("server started");
}