document.addEventListener('DOMContentLoaded', function () {
    function scrollToElement(element) {
        document.querySelector(element).scrollIntoView({
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToElement(targetId);
        });
    });
});

var typed= new SVGUnitTypes(".text",{
    strings:["Software engineer", "full-time student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true

})