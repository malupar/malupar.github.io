var theme = "light";
const sun = "Images/sun.svg";
const moon = "Images/moon.svg";
let checked = true;
window.onload = function() {

    const buttons = Array.from(document.getElementsByClassName("bio-text"));
    const options = Array.from(document.getElementsByClassName("category-text"));
    const container = document.getElementsByClassName("theme-container")[0];
    var elem = document.getElementById("themeIcon");
    const sidebar = document.getElementById("sidebar");
    const main_body = document.getElementById("maincenter");
    const body = document.body;
    let darkTheme = false;
    let start = false;
    if(localStorage.getItem('dark')) {
        start = true;
        SetDark(main_body, sidebar, buttons, elem, options, start);
        darkTheme = true;
        elem.src = moon;
    }
    else {
        start = true;
        SetLight(main_body, sidebar, buttons, elem, options, start);
        darkTheme = false;
        elem.src = sun;
    }
    container.addEventListener("click", changeTheme);
    function changeTheme() {
        if (start) {
            if (darkTheme) {
                SetDark(main_body, sidebar, buttons, elem, options, false);
                SetDark(main_body, sidebar, buttons, elem, options, start);
            }
            else {
                SetLight(main_body, sidebar, buttons, elem, options, false);
                SetLight(main_body, sidebar, buttons, elem, options, start);
            }
            start = false;
        }

        if (darkTheme) {
            localStorage.removeItem('dark',checked);
            SetDark(main_body, sidebar, buttons, elem, options, false);
            SetLight(main_body, sidebar, buttons, elem, options, false);
            elem.src = sun;
            darkTheme = false;
        }
        else {
            localStorage.setItem('dark',checked);
            SetLight(main_body, sidebar, buttons, elem, options, false);
            SetDark(main_body, sidebar, buttons, elem, options, false);
            elem.src = moon;
            darkTheme = true;
        }
    }
}

function SetDark(main_body, sidebar, container, elem, options, first) 
{
    if (first) {
        main_body.classList.toggle("dark-mode-initial");
        sidebar.classList.toggle("dark-mode-sidebar-initial");
        container.forEach(button => {
            button.classList.toggle("dark-mode-text-initial");
        });
        options.forEach(option => {
            option.classList.toggle("dark-mode-option-initial");
        });
    }
    else {
        main_body.classList.toggle("dark-mode");
        sidebar.classList.toggle("dark-mode-sidebar");
        container.forEach(button => {
            button.classList.toggle("dark-mode-text");
        });
        options.forEach(option => {
            option.classList.toggle("dark-mode-option");
        });
    }
}
function SetLight(main_body, sidebar, container, elem, options, first) 
{
    if (first) {
        main_body.classList.toggle("light-mode-initial");
        sidebar.classList.toggle("light-mode-sidebar-initial");
        container.forEach(button => {
            button.classList.toggle("light-mode-text-initial");
        });
        options.forEach(option => {
            option.classList.toggle("light-mode-option-initial");
        });
    }
    else {
        main_body.classList.toggle("light-mode");
        sidebar.classList.toggle("light-mode-sidebar");
        container.forEach(button => {
            button.classList.toggle("light-mode-text");
        });
        options.forEach(option => {
            option.classList.toggle("light-mode-option");
        });
    }
}