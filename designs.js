function makeCanvas(height, width) {
// Your code goes here!
    const table = document.getElementById("pixelCanvas");
    let canvas  = '';

// table loop
for (let i = 0; i < height; i++) {
    canvas += '<tr class="row"'+ i +'>';

    for (let j = 0; j < width; j++) {
        canvas += '<td class = "cell"'+j + '></td>';
    }
    canvas += '</tr>';
}
// create canvas
table.innerHTML = canvas;

// add event
addEvent();
}

// submission function
function onSubmit() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeCanvas(height, width);
}

function addEvent() {
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}



document.getElementById('sizePicker').onsubmit = function () {
    onSubmit();
};
