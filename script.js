/* 
- webpage 16x16 square divs
- create divs using js
- put them inside container div which can go directly in the html

- add hover effect leaving a pixelated trail like a pen would

- add a button to the top of the screen
- user adds squares per side (max 100) 64 -> 64x64
- generate a new grid
*/

const bod = document.body;

const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = "CLICK ME";
bod.appendChild(btn);



const container = document.createElement('div');
container.id = "container";
bod.appendChild(container);

function generateGrid (gridAmount) {
    for(let i = 0; i < gridAmount; i++) {
        // Create gridAmount Subdivs
        const subDiv = document.createElement('div');
        subDiv.classList.add('subDiv');
        container.appendChild(subDiv);
        for(let h = 0; h < gridAmount; h++) {
            const squareGrid = document.createElement('div');
            squareGrid.classList.add('squareGrid');
            subDiv.appendChild(squareGrid);        
        }
    }
}

generateGrid(16);

const square = document.querySelectorAll('.squareGrid')
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    let x = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    return x;
}

function colorMove () {
    square.forEach(square => square.addEventListener ('mouseover', () => {
        let x = random_rgba();
        square.setAttribute('style', `background: ${x}`)
    }))
}

btn.addEventListener ('click', () => {
    amount = prompt("How many squareGrids you want?");
    if(isNaN(amount) || amount > 100) alert("Please type in a number which is not greater than 100!")
    else 
    {
        let element = document.getElementById("container");
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
        generateGrid(amount);
        const square = document.querySelectorAll('.squareGrid')
        square.forEach(square => square.addEventListener ('mouseover', () => {
            let x = random_rgba();
            square.setAttribute('style', `background: ${x}`)
        }))
    }
}) 



colorMove();

