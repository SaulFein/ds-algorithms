function checkPerm(strA, strB) {
  for(var i=0; i<strA.length; i++){
    var ind = strA[i];
    console.log(strB.indexOf(ind));
    if(strB.indexOf(ind) === -1) { //indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
      return false;
    }
  }
  return true;
}



console.log(checkPerm('ABC', 'BCA'));
