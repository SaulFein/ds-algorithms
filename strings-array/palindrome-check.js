//check if a string is a palindrome

function palindrome(str) {
  var revStr = str.split('').reverse().join(''); //split breaks up a string in to an array of strings leaving it blank slpits on each character. you can also put in a value to hae it slip up the string based on that value sucah as a ' ' or a ','
  for(var i = 0; i < str.length; i++){
    if(str[i] == revStr[i]) {
      console.log('match between ' + str[i] + ' and ' + revStr[i]);
    } else {
      return false;
    }
  }
  return true;
}


console.log(palindrome('h'));
console.log(palindrome('hdoh'));
console.log(palindrome('hh'));
console.log(palindrome('cat'));
console.log(palindrome('racecar'));
console.log(palindrome('racescar'));



//previous attempts

// function palindrome(str) {
//   for(var i = 0; i < str.length; i++){
//     var op = str.length -1;
//     if(str[i] == str[op]) {
//       // op = op - 1;
//       console.log(op)
//     }
//     op = op - 1;
//     // else {
//     //   console.log('hit false')
//     //   // return false;
//     // }
//   }
//   return true;
// }

// function palindrome(str) {
//   for(var i = 0; i < str.length; i++){
//     for(var j = str.length -1; j>0; j--){
//       if(str[i] == str[j]){
//         console.log('match');
//         console.log(str[j]);
//         break;
//       } else {
//         return false;
//       }
//     }
//   }
//   return true;
// }
