require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const _url = require("url");
app.set('view engine', 'ejs');
app.set("views", __dirname+"/design");
app.use(express.static(__dirname+'/design'));
app.use("/", (req,res) => {
    let path = _url.parse(req.url, true).pathname;
    if(path == "/" || path == "/index.html" || path == "/index"){
        res.status(200);
        res.render("index.ejs");
    }else if(path == "/invite" || path == "/bots" || path == "/bot" || path == "/add" || path == "/invite.html" || path == "/add.html" || path == "/bots.html" || path == "/bot.html"){
        res.status(200);
        res.render("invite.ejs");
    }else if(path == "/sepbot" || path == "/sepbot.html"){
        res.status(200);
        res.redirect("https://discord.com/api/oauth2/authorize?client_id=764104980218118194&permissions=8&scope=bot%20applications.commands");
    }else if(path == "/sonnet" || path == "/sonnet.html"){
        res.status(200);
        res.redirect("https://discord.com/api/oauth2/authorize?client_id=850706596463116309&permissions=8&scope=bot%20applications.commands");
    }else if(path == "/easteregg" || path == "/easteregg.html"){
        var random = Math.floor(Math.random() * 100)+1;
        res.status(200);
        res.render("percentage.ejs", {percentage : random});
    }else{
        res.status(404);
        res.statusMessage = "Not Found.";
        path = path.length>=10?path.substring(0,10)+"...":path;
        res.render("error404.ejs", {address : path});
    }
});

app.listen(port, ()=>{
    console.log("Server is Running on Port : "+port);
});