require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const tips = ["우측에 있는 네비게이션을 눌러보세요.", "디스코드 봇을 초대해보세요.", "카카오톡도 봇이 지원합니다", "소네트봇은 삭제될 예정입니다"]
const _url = require("url");
app.set('view engine', 'ejs');
app.set("views", __dirname+"/static");
app.use(express.static(__dirname+"/static"));
app.use("/", (req,res) => {
    let path = _url.parse(req.url, true).pathname;
    if(path == "/" || path == "/index.html" || path == "/index"){
        res.status(200);
        res.render("index.ejs", {tip : tips[Math.floor(Math.random() * tips.length)]});
    }else if(path == "/invite" || path == "/bots" || path == "/bot" || path == "/add" || path == "/invite.html" || path == "/add.html" || path == "/bots.html" || path == "/bot.html"){
        res.status(200);
        res.render("invite.ejs");
    }else if(path == "/sepbot" || path == "/sepbot.html"){
        res.status(200);
        res.redirect("https://discord.com/api/oauth2/authorize?client_id=764104980218118194&permissions=8&scope=bot%20applications.commands");
    }else if(path == "/sonnet" || path == "/sonnet.html"){
        res.status(200);
        res.redirect("https://discord.com/api/oauth2/authorize?client_id=850706596463116309&permissions=8&scope=bot%20applications.commands");
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