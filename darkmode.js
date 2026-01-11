const themeSwitch = document.getElementById('theme-switch');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'active');
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'inactive');
};

if (darkMode === 'active') {
    enableDarkMode();
}


if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode');
        darkMode === 'active' ? disableDarkMode() : enableDarkMode();
    });
}
