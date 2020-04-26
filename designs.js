// Select color input
// Select size input
var color, height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
  console.log('height: ' + height + 'and width: ' + width);
})

// Build the grid
function makeGrid(h,w) {
  // Empty colored squares in the grid when submitting the form
  $('tr').remove();

// Your code goes here!
  for (var i = 1; i <= h; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (var j = 1; j <= w; j++) {
      $('#table' + i).append('<td></td>');
    }
  }

  // Add color to a cell
  $('td').click(function colorCell() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
        $(this).attr('style', 'background-color:' + color);
    }
  })
}
