/* ========== 토글 스타일 스위치 ========== */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () =>
{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// 토글 스위치 스크롤시 숨김
window.addEventListener("scroll", () =>
{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ========== 테마 색상 ========== */
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    alternateStyle.forEach((style) =>
    {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true")
        }
    })
}

/* ========== 테마 라이트/다크 모드 ========== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>
{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})