const btnDarkMode = document.querySelector('#btn_dark');
var root = document.querySelector(':root');
let initialTheme = true;



btnDarkMode.addEventListener('click', () => {
    btnDarkMode.classList.toggle('bi-sun-fill');
    if (initialTheme) {
        root.style.setProperty('--black', '#FFFFFF');
        root.style.setProperty('--white', '#161A1D');
        initialTheme = false;
    } else {
        root.style.setProperty('--black', '#161A1D');
        root.style.setProperty('--white', '#FFFFFF');
        initialTheme = true;
    }
})