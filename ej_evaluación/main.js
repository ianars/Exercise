
var numberList =  [1,3,4,2,1,3,1,5];
var number = 1;
 function countNumbers (number,numberList){
   var result = 0;
    for (var i = 0; i < numberList.length; i++) {
      if (numberList[i] === number) {
        result = result + 1;
    }
  }
  return result;
}
