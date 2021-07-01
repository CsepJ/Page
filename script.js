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
    let trigger = $('#trigger');
    let menu = $('nav ul');
    let main = $('#logo');
    let bot = $('#bot');
    let support = $("#support");
    let notice = $("#notice");
    let update = $("#update");
    $(update).on("click", () => {
        document.getElementById("page").innerHTML = `${msg.update}`;
    });
    $(main).on("click", () => {
        document.getElementById("page").innerHTML = "";
    });
    $(bot).on("click", () => {
        document.getElementById("page").innerHTML = `${msg.join}`
    });
    $(support).on("click", () => {
        document.getElementById("page").innerHTML = `${msg.support}`
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