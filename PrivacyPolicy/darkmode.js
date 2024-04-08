// darkmode.js
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const stylesheet = document.getElementById('dark-mode-stylesheet');

darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        stylesheet.href = 'darkmode.css';
    } else {
        stylesheet.href = 'styles.css';
    }
});
