const text = {
    notice: "Nyunbot이 서비스종료하였습니다. <br> 노래 봇인 Sonnet가 출시되었습니다.",
    update: "Sepbot에 노래기능이 폐지되었습니다.<br>Sonnet에 대신 노래기능이 들어갔습니다. <br> Sepbot에 퀴즈기능이 들어갔습니다."
};
const msg = {
    update: `<p style="color:F44444">업데이트</p><p style="font-size:2rem; color: #0ff193">${text.update}</p>`,
    notice: `<p style="color:#fb4343">공지사항</p><p style="font-size:2.5rem; color: #d144f4;">${text.notice}</p>`,
    support: '\<p><a href="https://discord.gg/kVMCumDa" id="discord" style="text-decoration:none; cursor:default; color:skyblue;">디스코드</a></p>',
    join: "<span style='overflow:auto;'><p><a href='https://discord.com/oauth2/authorize?client_id=764104980218118194&amp;permissions=0&amp;scope=bot' style='width:10%;text-decoration:line-though;;color:#d144f4;'>Sepbot</a></p><p><a href='https://discord.com/api/oauth2/authorize?client_id=850706596463116309&permissions=8&scope=bot' style='width:10%;text-decoration:line-though;color:#0ff193;'>Sonnet</a></p></span>",
    welcome: "<p>SepCod</p>"
};
$(document).on("ready", () => {
    $("body").fadeOut("slow");
    $("body").fadeIn("slow");
})
document.addEventListener("DOMContentLoaded", event => {
    const trigger = $('#trigger');
    const menu = $('nav ul');
    const logo = $('#logo');
    const bot = $('#bot');
    const command = $("#command");
    const notice = $("#notice");
    const update = $("#update");
    const command_url = "https://Sepbot.repl.co/cmd";
    // Hover Event
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
    $(update).on("click", () => {
        document.getElementById("page").innerHTML = `${msg.update}`;
    });
    $(logo).on("click", () => {
        document.getElementById("page").innerHTML = "";
    });
    $(bot).on("click", () => {
        document.getElementById("page").innerHTML = `${msg.join}`
    });
    $(command).on("click", () => {
        console.log("Event On");
        const xhr = new XMLHttpRequest();
        xhr.open("POST", command_url, true);
        xhr.onerror = () => {
            console.log("error");
        };
        xhr.onload = () => {
            console.log(xhr.response);
        }
    });
    $(notice).on("click", () => {
        document.getElementById("page").innerHTML = `${msg.notice}`
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