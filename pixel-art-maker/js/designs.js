
// Declare makeGrid() function to generate the pixel canvas
function makeGrid(event) {

	// Initialize element name
	let height, width, canvas, canTable, row, cell;

	// Select canvas size input
	height = document.getElementById("inputHeight").value;
	width = document.getElementById("inputWidth").value;

	// Get the reference for pixel canvas
	canvas = document.getElementById("pixelCanvas");

	// Creates a <table> element
  	canTable = document.createElement("table");

  	// Creating all cells
  	for (var i = 0; i < height; i++) {
    	// Creates a table row
    	row = document.createElement("tr");
 
    	for (var j = 0; j < width; j++) {
	      	// Create a cell (<td> element) and add cell to the end of the table row
	      	cell = document.createElement("td");
	      	row.appendChild(cell);
    }
 
    // Add the row to the end of the table
    canTable.appendChild(row);
  }

  	// Assign the structure of the table to the canvas,
  	// so that every time submit the canvas form the old canvas will be replaced by the new one
  	canvas.innerHTML = canTable.innerHTML;


	event.preventDefault();
}


// Submit the user-customized size to call makeGrid()
$("#sizePicker").submit(makeGrid);

// Click the cell (<td> element) to assign the selected color to it
$("#pixelCanvas").on( "click" ,"td", function() {
	// Select color input
	let cellColor = document.getElementById("colorPicker").value;
	// Odd click the cell to assign the selected color to it
	if(!$(this).attr("style")){			
		$( this ).css("background-color", cellColor);
	}
	// Even click the cell to remove the color from it
	else{
		$(this).removeAttr("style");
	}
	
});

