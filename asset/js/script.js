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

const nav = document.querySelector(".nav");
const navList = document.querySelectorAll("li");
const totalNavList = navList.length;


/* ==================== 사이드바 active 활성화/비활성화 ==================== */
for(let i = 0; i < totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        for(let j=0; j<totalNavList; j++)
        {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
    })
}


