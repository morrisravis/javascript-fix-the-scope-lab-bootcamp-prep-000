
function myAnimal() { var animal = "dog";
return animal;
}

var animal = "dog";

function yourAnimal() { var animal = "cat"; 
return myAnimal();
}

function add2(n) {
  return n + 2;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}


var theFunk = funkyFunction()()



