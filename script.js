const text = {
    notice: "Nyunbot: 서비스 종료<br>Sonnet(음악봇): 출시",
    update: "Sepbot:노래기능 삭제<br>Sepbot:퀴즈기능 추가"
};
const msg = {
    update: `<p id="title" style="color:snow">업데이트</p><p style="color: snow">${text.update}</p>`,
    notice: `<p id="title" style="color:snow">공지사항</p><p style="color: snow;">${text.notice}</p>`,
    support: '\<p><a href="https://discord.gg/kVMCumDa" id="discord" style="text-decoration:none; cursor:default; color:skyblue;">디스코드</a></p>',
    join: "<span style='overflow:auto;'><p><a href='https://discord.com/oauth2/authorize?client_id=764104980218118194&amp;permissions=0&amp;scope=bot' style='width:10%;text-decoration:line-though;;color:#d144f4;'>Sepbot</a></p><p><a href='https://discord.com/api/oauth2/authorize?client_id=850706596463116309&permissions=8&scope=bot' style='width:10%;text-decoration:line-though;color:#0ff193;'>Sonnet</a></p></span>",
    welcome: "<p>SepCod</p>"
};
const url = {
    cmd: "https://Sepbot.repl.co/cmd",
    support: "https://discord.gg/rJsuRUajSu",
    dev: "https://github.com/CsepJ"
}
$(document).on("ready", () => {
    $("body").fadeOut("slow");
    $("body").fadeIn("slow");
})
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
    const haveMenu = $(window).width<=720;
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
    })
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
        document.getElementById("page").innerHTML = `${msg.join}`
        menu_slide();
    });
    $(command).on("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url.cmd);
        xhr.send(null);
        xhr.onload = function(){
            const result = xhr.response;
            console.log(typeof result);
            result = result.map((cmd)=>cmd.cmd+" | "+cmd.description);
            $('#page').text(result.join("\n\n"));
            menu_slide();
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