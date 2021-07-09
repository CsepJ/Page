const text = {
    notice: "Nyunbot: 서비스 종료<br>Sonnet(음악봇): 출시",
    update: "Sepbot:노래기능 삭제<br>Sepbot:퀴즈기능 추가"
};
const url = {
    cmd: "https://Sepbot.repl.co/cmd",
    support: "https://discord.gg/rJsuRUajSu",
    dev: "https://github.com/CsepJ"
}
const msg = {
    update: `<p id="title" style="color:snow">업데이트</p><p style="color: snow">${text.update}</p>`,
    notice: `<p id="title" style="color:snow">공지사항</p><p style="color: snow;">${text.notice}</p>`,
    support: '\<p><a href="https://discord.gg/kVMCumDa" id="discord" style="text-decoration:none; cursor:default; color:skyblue;">디스코드</a></p>',
    welcome: "<p>SepCod</p>"
};
document.addEventListener("DOMContentLoaded", event => {
    const trigger = $('#trigger');
    const menu = $('nav ul');
    const logo = $('#logo');
    const bot = $('#bot');
    const support = $("#support_link");
    const command = $("#command");
    const notice = $("#notice");
    const update = $("#update");
    const dev = $("#SepJ");
    const menu_slide = function(){
        var width = $(window).width();
        if(width<=720){
            menu.slideToggle();
            return true;
        }else{
            return false;
        }
    }
    // Hover Event
    dev.hover(() => {
        dev.css("color", "blue");
        dev.css("text-decoration", "underline");
    }, () => {
        dev.css("color", "#0ff193");
        dev.css("text-decoration", "none");
    });
    support.hover(() => {
        support.css("color", "blue");
        support.css("text-decoration", "underline");
    }, () => {
        support.css("color", "#0ff193");
        support.css("text-decoration", "none");
    });
    logo.hover(() => {
        logo.css("color", "#d144f4");
    },() => {
        logo.css("color", "#0ff193");
    });
    bot.hover(() => {
        bot.css("color", "#0ff193");
    },() => {
        bot.css("color", "rgb(230, 220, 130)");
    });
    command.hover(() => {
        command.css("color", "#0ff193");
    },() => {
        command.css("color", "rgb(230, 220, 130)");
    });
    notice.hover(() => {
        notice.css("color", "#0ff193");
    },() => {
        notice.css("color", "rgb(230, 220, 130)");
    });
    update.hover(() => {
        update.css("color", "#0ff193");
    },() => {
        update.css("color", "rgb(230, 220, 130)");
    });
    // Click Event
    $(dev).on("click", ()=>{
        window.open(url.dev);
        menu_slide();
    });
    $(support).on("click", () => {
        window.open(url.support);
        menu_slide();
    })
    $(update).on("click", () => {
        document.getElementById("page").innerHTML = `${msg.update}`;
        menu_slide();
    });
    $(logo).on("click", () => {
        document.getElementById("page").innerHTML = "";
        menu_slide();
    });
    $(bot).on("click", () => {
        window.open("invite.html");
        menu_slide();
    });
    $(command).on("click", () => {
        try{
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url.cmd);
        xhr.send(null);
        xhr.onload = function(){
            const result = JSON.parse(xhr.response).map((cmd)=>cmd.cmd+" | "+cmd.description);
            $("#page").html("<div style='text-align:center'>"+result.join("<br><br>")+"</div>");
            menu_slide();
        }
    }catch(e){
        $("#page").html("<div style='text-align:center;'>"+new Array(100).fill("셉봇").join("<br><br>")+"</div>");
    }
    });
    $(notice).on("click", () => {
        document.getElementById("page").innerHTML = `${msg.notice}`
        menu_slide();
    });
    $(trigger).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle()
    });
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style')
        }
    })
});