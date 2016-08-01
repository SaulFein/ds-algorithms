function renderBox(color){
  $("body").append("<div class=" + color + "></div>");
}

function line(num) {
  for (var i = 0; i < num; i++){
    if(i % 2 === 0){
      renderBox('black');
    } else {
      renderBox('red');
    }
  }
}
// $(document).ready(function() {
  // $( "body" ).append( "<p>Test</p>" );
// });

line(10);
