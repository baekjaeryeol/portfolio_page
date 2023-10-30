const ham = document.querySelector('.ham');
const link = document.querySelector('.link');
const git = document.querySelector('.git');

let isFilling = false;

ham.addEventListener("click", () => {
    link.classList.toggle('active');
    git.classList.toggle('active');
    header.classList.toggle('height');
})

new TypeIt('#title', {
    strings: ["안녕하세요", "신입 퍼블리셔 지원자 백재렬 입니다"],
    waitUntilVisible: true
}).go();

const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }   
})

/* ============================== 스크롤 이동 ==============================  */

const homeTitle = document.querySelector(".hometitle");
homeTitle.addEventListener("click", () => {
    location.href = location.href;
})

const homeLink = document.querySelector(".home_link");
const aboutmeLink = document.querySelector(".aboutme_link");
const aboutme_Bg = document.querySelector(".aboutme_bg");
const skillsLink = document.querySelector(".skills-link");
const skills_Bg = document.querySelector(".skills_bg");
const projectLink = document.querySelector(".project_link");
const project_Bg = document.querySelector(".project_bg");

homeLink.addEventListener("click", () => {
    window.scrollTo({left: 0, top: 0, behavior: "smooth"})
})

aboutmeLink.addEventListener("click", () => {
    window.scrollBy({top: aboutme_Bg.getBoundingClientRect().top, behavior: 'smooth'})
})

skillsLink.addEventListener("click", () => {
    window.scrollBy({top: skills_Bg.getBoundingClientRect().top, behavior: 'smooth'})
})

projectLink.addEventListener("click", () => {
    window.scrollBy({top: project_Bg.getBoundingClientRect().top, behavior: 'smooth'})
})

/* ============================== NEXON ==============================  */

const NXthumbnail = document.querySelector(".nexon .thumbnail");
const NXback = document.querySelector(".nexon .back");
const NX돌리기 = document.querySelector(".nexon .back_title i");
const NX앞배경 = document.querySelector(".nexon .앞배경")

NXthumbnail.addEventListener("click", () => {
    NXthumbnail.style.zIndex = 1;
    NXthumbnail.style.transform = 'rotateY(' + 230 + 'deg)';
    NXthumbnail.style.transitionDuration = 1;

    NXback.style.zIndex = 2;
    NXback.style.transform = 'rotateY(' + 0 + 'deg)';    
})

NX돌리기.addEventListener("click", () => {
    NXback.style.zIndex = 1;
    NXback.style.transform = 'rotateY(' + 230 + 'deg)';
    
    NXthumbnail.style.zIndex = 2;
    NXthumbnail.style.transform = 'rotateY(' + 0 + 'deg)';    
})

NXthumbnail.addEventListener("mouseover", () => {
    NX앞배경.classList.remove("hidden")
})

NXthumbnail.addEventListener("mouseout", () => {
    NX앞배경.classList.add("hidden")
})

/* ============================== TODO LISR ==============================  */

const CAthumbnail = document.querySelector(".chromApp .thumbnail");
const CAback = document.querySelector(".chromApp .back");
const CA돌리기 = document.querySelector(".chromApp .back_title i");
const CA앞배경 = document.querySelector(".chromApp .앞배경")

CAthumbnail.addEventListener("click", () => {
    CAthumbnail.style.zIndex = 1;
    CAthumbnail.style.transform = 'rotateY(' + 230 + 'deg)';
    CAthumbnail.style.transitionDuration = 1;

    CAback.style.zIndex = 2;
    CAback.style.transform = 'rotateY(' + 0 + 'deg)';    
})

CA돌리기.addEventListener("click", () => {
    CAback.style.zIndex = 1;
    CAback.style.transform = 'rotateY(' + 230 + 'deg)';
    
    CAthumbnail.style.zIndex = 2;
    CAthumbnail.style.transform = 'rotateY(' + 0 + 'deg)';    
})

CAthumbnail.addEventListener("mouseover", () => {
    CA앞배경.classList.remove("hidden")
})

CAthumbnail.addEventListener("mouseout", () => {
    CA앞배경.classList.add("hidden")
})

/* ============================== Painting Board ==============================  */

const PBthumbnail = document.querySelector(".Painting .thumbnail");
const PBback = document.querySelector(".Painting .back");
const PB돌리기 = document.querySelector(".Painting .back_title i");
const PB앞배경 = document.querySelector(".Painting .앞배경")

PBthumbnail.addEventListener("click", () => {
    PBthumbnail.style.zIndex = 1;
    PBthumbnail.style.transform = 'rotateY(' + 230 + 'deg)';
    PBthumbnail.style.transitionDuration = 1;

    PBback.style.zIndex = 2;
    PBback.style.transform = 'rotateY(' + 0 + 'deg)';    
})

PB돌리기.addEventListener("click", () => {
    PBback.style.zIndex = 1;
    PBback.style.transform = 'rotateY(' + 230 + 'deg)';
    
    PBthumbnail.style.zIndex = 2;
    PBthumbnail.style.transform = 'rotateY(' + 0 + 'deg)';    
})

PBthumbnail.addEventListener("mouseover", () => {
    PB앞배경.classList.remove("hidden")
})

PBthumbnail.addEventListener("mouseout", () => {
    PB앞배경.classList.add("hidden")
})

/* ============================== Portfolio ==============================  */

const PFthumbnail = document.querySelector(".pofol .thumbnail");
const PFback = document.querySelector(".pofol .back");
const PF돌리기 = document.querySelector(".pofol .back_title i");
const PF앞배경 = document.querySelector(".pofol .앞배경")

PFthumbnail.addEventListener("click", () => {
    PFthumbnail.style.zIndex = 1;
    PFthumbnail.style.transform = 'rotateY(' + 230 + 'deg)';
    PFthumbnail.style.transitionDuration = 1;

    PFback.style.zIndex = 2;
    PFback.style.transform = 'rotateY(' + 0 + 'deg)';    
})

PF돌리기.addEventListener("click", () => {
    PFback.style.zIndex = 1;
    PFback.style.transform = 'rotateY(' + 230 + 'deg)';
    
    PFthumbnail.style.zIndex = 2;
    PFthumbnail.style.transform = 'rotateY(' + 0 + 'deg)';    
})

PFthumbnail.addEventListener("mouseover", () => {
    PF앞배경.classList.remove("hidden")
})

PFthumbnail.addEventListener("mouseout", () => {
    PF앞배경.classList.add("hidden")
})