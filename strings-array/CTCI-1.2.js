// function checkPerm(strA, strB) {
//   for(var i=0; i<strA.length; i++){
//     var ind = strA[i];
//     console.log(strB.indexOf(ind));
//     if(strB.indexOf(ind) === -1) { //indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//       return false;
//     }
//   }
//   return true;
// }
//
//
//
// console.log(checkPerm('ABC', 'BCA'));
// console.log(checkPerm('BBC', 'BCA')); //this breaks the above code!

function map(str) {
  var strMap = {};
  for(var i = 0; i < str.length; i++) {
    if(str[i] in strMap) {
      strMap[str[i]]++;
    } else {
      strMap[str[i]] = 1;
    }
  }
  return strMap;
}

// console.log(map('bob'));

function checkPerm(strA, strB) {
  var str1 = map(strA);
  var str2 = map(strB);
  if(str1.length != str2.length) return false;
  forEach(Key in str1) {
    if (key in str2){
      if(str1[key] != str2[key]) {
        return false;
      } else { return false; }
    }
  }
  return true;
}
