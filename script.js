const text = {
  notice: "셉봇은 카카오톡에서 운영이 종료될 예정입니다."
}
const msg = {
    notice: `<p style="color:#fb4343">공지사항</p><p style="font-size:3rem; color: #FF0855;">${text.notice}</p>`,
    support: '<p><a href="https://open.kakao.com/me/Sepbot" id="kakao" style="text-decoration:none; cursor:default; color:skyblue;">카카오톡</a></p><p><a href="https://discord.gg/kVMCumDa" id="discord" style="text-decoration:none; cursor:default; color:skyblue;">디스코드</a></p>',
    join: "<span style='overflow:auto;'><p><a href='https://discord.com/oauth2/authorize?client_id=764104980218118194&amp;permissions=0&amp;scope=bot' style='width:10%;text-decoration:none;color:#fb4343;'>Sepbot</a></p><p><a href='https://discord.com/oauth2/authorize?client_id=798069321347235890&amp;permissions=0&amp;scope=bot' style='width:10%;text-decoration:none;color:#fb4343;'>Nyunbot</a></p></span>"
}
document.addEventListener("DOMContentLoaded", event => {
  let trigger=$('#trigger');
  let menu=$('nav ul');
  let main=$('#logo');
  let bot=$('#bot');
  let support=$("#support");
  let notice=$("#notice");
  $(main).on("click", () => {
    document.getElementById("page").innerHTML = "";
  });
  $(bot).on("click", () => {
    document.getElementById("page").innerHTML = `${msg.join}`;
  });
  $(support).on("click",() => {
    document.getElementById("page").innerHTML = `${msg.support}`;
  });
  $(notice).on("click", () => {
    document.getElementById("page").innerHTML = `${msg.notice}`;
  });
  $(trigger).on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});