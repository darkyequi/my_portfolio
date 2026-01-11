document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const profileImg = document.querySelector('.my-photo img');

    let darkMode = localStorage.getItem('darkMode');

    const setProfileImage = () => {
        if (!profileImg) return;

        profileImg.src = darkMode === 'active'
            ? 'assets/nightformal.png'
            : 'assets/formal.png';
    };

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        darkMode = 'active';
        localStorage.setItem('darkMode', darkMode);
        setProfileImage();
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        darkMode = 'inactive';
        localStorage.setItem('darkMode', darkMode);
        setProfileImage();
    };

    // Toggle theme
    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            darkMode === 'active' ? disableDarkMode() : enableDarkMode();
        });
    }
});
