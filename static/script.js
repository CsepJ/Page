document.addEventListener("DOMContentLoaded", async event => {
    const logo = $("#logo"), invite = $("#invite"), notice = $("#notice"), commands = $("#commands"), update = $("#update"), support = $("#support"), server = $("#server"), page = $("#page");
    $(logo).on("click", () => {
        page.html(``);
    });
    $(notice).on("click", () => {
        page.html(text.notice.join("<br>".repeat(3)));
    });
    $(commands).on("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url.cmd);
        xhr.send(null);
        xhr.onload = function(){
            const result = JSON.parse(xhr.response).map((cmd)=>cmd.cmd+" | "+cmd.description);
            page.html("<div style='text-align:center; padding-bottom:30%;'>"+result.join("<br><br>")+"</div>");
        }
    });
    $(update).on("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url.update);
        xhr.send(null);
        xhr.onload = function(){
            const result = JSON.parse(xhr.responseText);
            page.html("<div>"+result.version+"버전<br>"+result.log+"</div>");
        }
    });
    $(invite).on("click", () => {
        page.html(`
        <div>
        <a href="https://sepcod.com/sepbot" alt="Sepbot" title="Sepbot">셉봇(Sepbot) 초대</a>
        <br>
        <a style="text-decoration: line-through;" href="https://sepcod.com/sonnet" alt="Sonnet" title="Sonnet">소네트(Sonnet) 초대</a>
        </div>
        `);
    });
    $(support).on("click", () => {
        let bool = confirm(`${url.support}를 여시겠습니까?`);
        bool?window.open(url.support):page.html();
    });
});