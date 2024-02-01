var theme = "light";
const sun = "Images/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
let checked = true;
window.onload = function() {

    const buttons = Array.from(document.getElementsByClassName("bio-text"));
    const options = Array.from(document.getElementsByClassName("category-text"));
    const container = document.getElementsByClassName("theme-container")[0];
    var elem = document.getElementById("themeIcon");
    const sidebar = document.getElementById("sidebar");
    const main_body = document.getElementById("maincenter");
    const body = document.body;
    if(localStorage.getItem('dark')) {
        SetDark(main_body, sidebar, buttons, elem, options);
    }
    container.addEventListener("click", changeTheme);
    function changeTheme() {
        if (elem.src === moon) {
            localStorage.removeItem('dark',checked);
            SetLight(main_body, sidebar, buttons, elem, options);
        }
        else {
            localStorage.setItem('dark',checked);
            SetDark(main_body, sidebar, buttons, elem, options);
        }
    }
}

function SetDark(main_body, sidebar, container, elem, options) 
{
    main_body.classList.toggle("dark-mode");
    sidebar.classList.toggle("dark-mode-sidebar");
    container.forEach(button => {
        button.classList.toggle("dark-mode-text");
    });
    options.forEach(option => {
        option.classList.toggle("dark-mode");
    });
    elem.src = moon;
}
function SetLight(main_body, sidebar, container, elem, options) 
{
    main_body.classList.toggle("dark-mode");
    sidebar.classList.toggle("dark-mode-sidebar");
    container.forEach(button => {
        button.classList.toggle("dark-mode-text");
    });
    options.forEach(option => {
        option.classList.toggle("dark-mode");
    });
    elem.src = sun;
}