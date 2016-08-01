function renderBox(color){
  $("body").append("<div class=" + color + "></div>");
}

function horizontalBR(num){
  for (var i = 0; i < num; i++){
    if(i % 2 === 0){
      renderBox('blackIn');
    } else {
      renderBox('redIn');
    }
  }
}
function horizontalRB(num){
  for (var i = 0; i < num; i++){
    if(i % 2 === 0){
      renderBox('redIn');
    } else {
      renderBox('blackIn');
    }
  }
}

function line(num) {
  for(var j = 0; j < num; j++){
    if(j % 2 === 0){
      horizontalBR(num);
    } else {
      horizontalRB(num);
    }
    $("body").append("<br />")
  }
}


line(10);

//line(width, length)
