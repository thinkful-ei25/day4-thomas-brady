
'use strict';

//When user hovers over a grid cell - the "active" class should be permanetly applied to the cell.
//When the user clicks the "clear grid" button, the grid should reset all cells by calling the provided createAndPlaceRows() function.

/* Approach #1: Add an event listener onto every .cell that's listening for the appropriate event. Notice that since createAndPlaceRows() unbinds all listeners on .cell, you need to reapply them every time it's invoked. */



// Add Event Listeners here:

function handleHover() {
    //listen for hover on all class cell
    //switch up class to the current item
    $('.grid').on('mouseover', '.cell', function() {
        $(this).addClass('active');
    });

}

function handleReDraw(n) {
    $('button').on('click', function(event) {
        createAndPlaceRows(n);
    });

}


// When DOM is ready:
$(() => {
    createAndPlaceRows(8);
    handleHover();
    handleReDraw(8);
  
    // Bind your event listeners here:
});
  
  
  
  
  
  
  
// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
    let row = '<div class="row">';
    let str = '<div class="cell">&nbsp;</div>';
    for (let i = 0; i < cellCount; i++) {
        row += str;
    }
    row += '</div>';
    return row;
}
  
function createRows(n) {
    let rows = '';
    for (let i = 0; i < n; i++) {
        rows += createRow(n);
    }
    return rows;
}
  
function createAndPlaceRows(n) {
    $('.cell').remove(); // Clear all current cells and listeners
    const rows = createRows(n);
    $('.grid').html(rows);
    const cells = $('.cell');
    cells.css({ height: cells.width() });
}
