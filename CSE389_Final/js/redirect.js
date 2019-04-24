clickToHref();
function clickToHref() {
    var eles = document.querySelectorAll("div[href]");
    eles.forEach(function (item) {
        item.addEventListener("click", function () {
            var href = item.getAttribute("href");
            var target = item.getAttribute("target");
            if (!target) {
                location.href = href;
            }
            else {
                window.open(href, target);
            }
        });
    })
}