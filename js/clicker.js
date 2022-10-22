const button = document.getElementById("unclickable")
let count = 0;

button.onclick = function () {
    count += 1
    button.innerHTML = "Click me: " + count;
};


const mediaQuery = window.matchMedia('(min-width: 1366px)')
// Check if the media query is true
if (mediaQuery.matches) {
    const random = (min, max) => {
        const rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand);
    }

    button.addEventListener('mouseover', () => {
        button.style.left = `${random(0, 90)}%`;
        button.style.top = `${random(0, 90)}%`;
    });

}