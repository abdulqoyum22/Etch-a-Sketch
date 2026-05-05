const container = document.querySelector(".container");


function createGrid(size) {
    container.textContent = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        container.appendChild(square);
        square.classList.add('square');

        function getRandomRGB() {
            const r = Math.floor(Math.random() * 256); // 0 to 255
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }


        square.addEventListener('mouseover', () => {
            if (!square.style.backgroundColor) {
            square.style.backgroundColor = getRandomRGB();
            square.style.opacity = 0.1;
            } else {
                let opacity = Number(square.style.opacity);
                if (opacity < 1) {
                    square.style.opacity = opacity + 0.1;
                }
            }
        });
    };
};


const myButton = document.querySelector('#promptBtn');

myButton.addEventListener('click', function() {
let response = prompt("Enter the number grids you want");

if (response <= 100) {
    createGrid(Number(response));
}

else {
    alert("Re-enter the number");
}
});
