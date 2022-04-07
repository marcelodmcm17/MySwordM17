const root = document.documentElement;
const buttonTheme = document.querySelectorAll(".colors_btn");
console.log(buttonTheme);
buttonTheme.forEach((button) => {
    button.addEventListener("click", changeTheme);
});
function changeTheme(e) {
    switch (this.dataset.theme) {
        case "White":
            root.style.setProperty("--bg_c1", "#fff");
            root.style.setProperty("--bg_c2", "#eeeeee");
            root.style.setProperty("--cor1", "#f46917");
            root.style.setProperty("--cor2", "#2d576d");
            root.style.setProperty("--cor3", "#eeeeee");
            root.style.setProperty("--cor4", "#454545");
            root.style.setProperty("--text", "#333");
            root.style.setProperty("--cor7", "#58849a");
            break;
        case "dark":
            root.style.setProperty("--bg_c1", "#585858");
            root.style.setProperty("--bg_c2", "#404040");
            root.style.setProperty("--cor1", "#c2b391");
            root.style.setProperty("--cor2", "#c2b391");
            root.style.setProperty("--cor3", "#888888");
            root.style.setProperty("--cor4", "#ffebcd");
            root.style.setProperty("--text", "#fff");
            root.style.setProperty("--cor7", "#ffebcd");
            break;
        case "light":
            root.style.setProperty("--bg_c1", "#ffebcd");
            root.style.setProperty("--bg_c2", "#ffebcd");
            root.style.setProperty("--cor1", "#634E6E");
            root.style.setProperty("--cor2", "#5FD7C5");
            root.style.setProperty("--cor3", "#fff");
            root.style.setProperty("--cor4", "#122A40");
            root.style.setProperty("--text", "#333");
            root.style.setProperty("--cor7", "#634E6E");
            break;
        case "reload":
            root.style.setProperty("--bg_c1", "#ffffff00");
            root.style.setProperty("--bg_c2", "#ffffff00");
            root.style.setProperty("--cor1", "#f46917");
            root.style.setProperty("--cor2", "#2d576d");
            root.style.setProperty("--cor3", "#eeeeee");
            root.style.setProperty("--cor4", "#454545");
            root.style.setProperty("--text", "#333");
            break;
    }
};
(function ($) {
    sdb1();
    function sdb1() {
        $(".pwsdb_ico").on("click", function () {
            $(".pwsdb").toggleClass("extend");
            return false;
        });
    }
})(jQuery);
(function ($) {
    sdb2();
    function sdb2() {
        $(".pw2sdb_ico").on("click", function () {
            $(".pw2sdb").toggleClass("extend2s");
            return false;
        });
    }
})(jQuery);

var m17 = {}; m17.styleElement = function (element, prop, val) { element.style.setProperty(prop, val); }; m17.toggleShow = function (sel) { var i, x = m17.getElements(sel), l = x.length; for (i = 0; i < l; i++) { if (x[i].style.display == "none") { m17.styleElement(x[i], "display", "block"); } else { m17.styleElement(x[i], "display", "none"); } } }; m17.getElements = function (id) { if (typeof id == "object") { return [id]; } else { return document.querySelectorAll(id); } };
