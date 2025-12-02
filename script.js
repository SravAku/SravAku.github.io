const hours = new Date().getHours()
const isNightTime = hours < 6 || hours > 21

// to night mode
if (isNightTime) {
    var r = document.querySelector(':root');
    r.style.setProperty('--bg-color', '#002b36');
    r.style.setProperty('--bg-color-highlight', '#073642');
    r.style.setProperty('--bg-color-highlight2', '#0e3e4b');
    r.style.setProperty('--text-color', '#839496');
    r.style.setProperty('--link-color', '#268ad2');
}