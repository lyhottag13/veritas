const button = document.getElementById('button');
const goat = document.getElementById('goat');
const veritas = document.getElementById('veritas');
const music = document.getElementById('music');
const strawberry = document.getElementById('strawberry');


function main() {
    button.addEventListener('click', () => {
        music.play();
        button.remove();
        setTimeout(() => {
            veritas.style.opacity = 1;
            goat.style.opacity = '0';
        }, 15732);
    });
    goat.addEventListener('transitionend', () => {
        goat.remove();
    });
}

main();