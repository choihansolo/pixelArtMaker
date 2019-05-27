function makeGrid() {
    
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    var table = document.getElementById('pixelCanvas');
    
    table.innerHTML = '';
    
    for (var i = 0; i < height; i++) {      
        var row = table.insertRow(i);
        for (var j = 0; j < width; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener('click', function(event){
            event.target.style.backgroundColor = document.getElementById("colorPicker").value;
        })  
        }
    }
}

document.getElementById('sizePicker').addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
});
