// Functions
// For slideshow
function plusSlide(n) {
    showSlide(slideIndex += n);
}
function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
// For tabbed table
function openTab(index) {
    let tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabs[index].style.display = "block";
    let tabButton = document.getElementsByClassName("b-tab");
    for (let i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove("active");
    }
    tabButton[index].classList.add("active");
}


// For icon re-direct on click in nav bar
let logoEvent = document.querySelector("#smoking-icon");
logoEvent.addEventListener("click", () =>
    window.open("https://www.healthhub.sg/programmes/88/IQuit", "_blank").focus());


if (document.URL.includes("index.html")) {
    //For window scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            document.getElementById("title-start").style.padding = "1em 0";
        }
    });
    // For flippping cards
    let cardFlipEvent = document.querySelectorAll(".card");
    cardFlipEvent.forEach(card =>
        card.addEventListener("click", () =>
            card.classList.toggle("flipped")));
}


if (document.URL.includes("history.html")) {
    // For horizontal timeline
    let yearEvent = document.querySelectorAll(".year");
    yearEvent.forEach((year, index) =>
        year.addEventListener("click", () => {
            let contentArray = document.querySelectorAll(".content");
            for (let i = 0; i < contentArray.length; i++) {
                contentArray[i].style.display = "none";
            }
            contentArray[index].style.display = "block";
            for (let i = 0; i < yearEvent.length; i++) {
                yearEvent[i].classList.remove("active");
            }
            yearEvent[index].classList.add("active");
        }));
}


if (document.URL.includes("contents.html")) {
    // For slideshow
    var slideIndex = 1;
    showSlide(slideIndex);

    let prevPageEvent = document.querySelector("#prev");
    prevPageEvent.addEventListener("click", () => plusSlide(-1));
    let nextPageEvent = document.querySelector("#next");
    nextPageEvent.addEventListener("click", () => plusSlide(1));

    // For tabbed table
    let blungEvent = document.querySelector("#blung");
    blungEvent.addEventListener("click", () => openTab(0));
    let bcopdEvent = document.querySelector("#bcopd");
    bcopdEvent.addEventListener("click", () => openTab(1));
    let bchdEvent = document.querySelector("#bchd");
    bchdEvent.addEventListener("click", () => openTab(2));
    document.querySelector(".default-tab").click();
}