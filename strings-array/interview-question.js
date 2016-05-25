//first code problem from interview

//write a function that takes in a string sentence and revereses the letters of every other word in the sentence

function rev(str){
      var cont = str.split(' ');
      for(var i = 0; i < cont.length; i++){
        if(i % 2 != 0) {
          var reverse = cont[i].split('').reverse().join("");
          cont[i] = reverse;
        }
      }
      str = cont.join(" ")
      return str;
    }
