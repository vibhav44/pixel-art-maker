//start of code
$(document).ready(function(){
  //when submit button is clicked, function is called
  $("form").submit(function (e) {
    //this prevents refreshing of form
    e.preventDefault();
    //row variable stores no of rows or height of table
    var row=parseInt($('#input_height').val());
    //col variable stores no of rows or width of table
    var col=parseInt($('#input_width').val());
    //it empties the table previously created
    $("#pixel_canvas").empty();
    //variables for creating rows and columns
    var curRow,curCol;
    //loop for creating required no of rows
    for(curRow=0;curRow<row;curRow++){
      //row is intialized
        var newRow=$("<tr>");
      //loop for creating required no of columns
        for(curCol=0;curCol<col;curCol++){
            //creating no of columns required
            var newCol=newRow.append($("<td>"));
        }
        //inner loop ends
        //appending the created cells to the table
        $("#pixel_canvas").append(newRow);
    }
    //outer loop ends
});

  //this function activates when a cell is clicked
  $("body").on("click","td",function(){
    //the color chosen by user is selected
    var color=$('#colorPicker').val();
    //selected cell is colored with chosen color
    $(this).css("background-color",color);
  });
  //end
});
