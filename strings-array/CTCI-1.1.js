//Implement an alogrithm to check if a string has all unique characters

function isUnique(str) {
  str = str.toLowerCase();//this is optional to stop upercase and lowercase of the same letter from passing
  if(str.length == 0 || str.length == 1) return true;
  for(var i = 0; i < str.length; i++) {
    for(var j = i+1; j < str.length; j++) {
      if(str[i] == str[j]) return false;
    }
  }
  return true;
}

//test cases

console.log(isUnique('hello'));
console.log(isUnique('h'));
console.log(isUnique(''));
console.log(isUnique('heh'));
console.log(isUnique('joe'));
console.log(isUnique('Jj'));

// big O of n^2
