/* ==================== 타이포그래피 ==================== */

const typed = new Typed(".typing", {
    strings: ["프론트 개발자", "웹 디자이너", "베이시스트"],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: false,
    smartBackspace: true,
    cursorChar: 'ㅣ',
    loop: true
})

/* ==================== 사이드바 ==================== */

const nav = document.querySelector(".nav")
const navList = document.querySelectorAll("li")
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section"), totalSection = allSection.length;

/* ==================== 사이드바 active 활성화/비활성화 ==================== */
for(let i = 0; i < totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j = 0; j < totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection()
{
    for(let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}

function showSection(element)
{
    for(let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element)
{
    for(let i = 0; i < totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navToggleBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navToggleBtn.addEventListener("click", () =>
{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}

