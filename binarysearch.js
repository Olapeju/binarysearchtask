Array.prototype.toTwenty = function(){
  
  var newArray = [];
  for (var i = 1; i <= 20; i++){
    newArray.push(i);
  }
  return newArray;
}

Array.prototype.toForty = function(){
  var newArray = [];
  for(var i = 2; i <= 40; i+=2){
    newArray.push(i);
  }
  return newArray;
}

Array.prototype.toOneThousand = function(){
  var newArray = [];
  for (var i = 10; i <= 1000; i+= 10){
    newArray.push(i);
  }
  return newArray;
}

Array.prototype.search = function(searchTerm){

  
  var minIndex = 0;
  var maxIndex = this.length - 1;
  var currentIndex;
  var currentElement;
  var count = 0;
  
  while (minIndex <= maxIndex) {
      currentIndex = (minIndex + maxIndex) / 2 | 0;
      currentElement = this[currentIndex];
    
      if (currentElement < searchTerm) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > searchTerm) {
          maxIndex = currentIndex - 1;
      }
      else {
        break;
      }
      currentIndex = -1;
      
  }
  
    return {"count":count, "index": currentIndex, "length":this.length};
  
}

var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();