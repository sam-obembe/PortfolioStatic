
document.getElementById("darkModeToggle").addEventListener('click', toggleDarkMode)

let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
let darkModeStyle = "bg-dark text-white";
let lightMode = "bg-white";


function toggleDarkMode(isDark) {
    var classes = document.body.classList;
    let navbar = document.getElementsByTagName("nav")[0];
    let navClasses = navbar.classList;

    console.log(navClasses);

    var updatedClassList = "";
    let updatedNav = "";

    if (classes.value === darkModeStyle) {
        updatedClassList = "";
        updateToggleText("Dark Mode");
    }
    else {
        updatedClassList = darkModeStyle;
        updateToggleText("Light Mode")
    }


    if (navClasses.contains("navbar-light")) {
        updatedNav = navClasses.toString().replace("navbar-light", "navbar-dark").replace("bg-white", "bg-dark");
        //navClasses.add(darkModeStyle);
    }
    else if (navClasses.contains("navbar-dark")) {
        updatedNav = navClasses.toString().replace("navbar-dark", "navbar-light").replace("bg-dark", "bg-white");
    }

    document.body.className = updatedClassList;
    navbar.className = updatedNav;
}


function updateToggleText(text) {
    document.getElementById("darkModeToggle").innerText = text;
}