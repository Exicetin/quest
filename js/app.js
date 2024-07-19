let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

window.onload = function() {
    const accordions = document.querySelectorAll(".accordion");

    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.add("accordion__active");
        content.style.maxHeight = content.scrollHeight + "px";
    };

    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.remove("accordion__active");
        content.style.maxHeight = null;
    };

    accordions.forEach((accordion) => {
        const intro = accordion.querySelector(".accordion__intro");
        const content = accordion.querySelector(".accordion__content");

        intro.onclick = () => {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
            } else {
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
        };
    });

}
