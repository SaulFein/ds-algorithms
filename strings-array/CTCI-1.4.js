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

function perPal(str) {
  var str1 = map(str);
  var oddCount = 0;
  for(key in str1) {
    if(str1[key] % 2 != 0){
      oddCount++;
      console.log("oc increase")
    }
    if(oddCount == 2) return false;
  }
  return true;
}

console.log(perPal(""))
console.log(perPal("b"))
console.log(perPal("jdfksl"))
console.log(perPal("ghghqw"))
console.log(perPal("bb"))
console.log(perPal("bob"))
console.log(perPal("dood"))
console.log(perPal("bbo"))
