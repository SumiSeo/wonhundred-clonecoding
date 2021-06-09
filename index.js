const header = document.querySelector(".header");
const lists = document.querySelectorAll(".header__nav__list");
const section1 = document.querySelector(".section__1");
const stickyNav = document.querySelector(".header__nav--second");
const staticText1 = document.querySelector(".static__text--1");
const staticText2 = document.querySelector(".static__text--2");
const movingText2 = document.querySelector(".moving__text--2");
const movingText1 = document.querySelector(".moving__text--1");


header.addEventListener("mouseover", function(e){
    const link = e.target;
    const siblings = link.closest(".header__nav__list");
    if(link === siblings) {
        link.style.opacity=0.5;
    }
});


header.addEventListener("mouseout", function(e){
    const link = e.target;
    const siblings = link.closest(".header__nav__list");
    if(link === siblings) {
        link.style.opacity=1;
    }
})


// const obsCallback = function(entries,observer){
//     entries.forEach(entry => 
//         console.log(entry));
//         // if(!isIntersecting) return;
// };


// const obsOption = {
//     root: null,
//     threshold: [0.8, 1],
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);

const navFirst = document.querySelector(".header__nav--first");
const stickyFunction =function(entries,observer){
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting)stickyNav.classList.add("sticky");
    else stickyNav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyFunction, {
    root:null,
    threshold:0,

});

headerObserver.observe(navFirst);


