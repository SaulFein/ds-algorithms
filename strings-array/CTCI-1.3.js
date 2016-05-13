//URLify a string by replacing spaces with %20

// function URLify(string) {
//   var urlmute = string;
//   for (var i = 0; i < string.length; i++){
//     if(string[i] == ' '){
//       urlmute[i] = '%20';// cannot do this!
//     }
//   }
//   return urlmute;
// }
//
// console.log(URLify('Bob wears many hats!'));

function URLify(string) {
  var URLed = [];
  for (var i = 0; i < string.length; i++){
    if(string[i] == ' '){
      URLed.push('%20');
    } else {
      URLed.push(string[i]);
    }
  }
  return URLed.join('');//the empty string removes the commas because each letter was an element in the arry with out the empty string there would be many commas
}

console.log(URLify('Bob wears many hats!'));
