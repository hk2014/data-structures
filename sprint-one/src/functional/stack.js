
var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count++] = value;
    //return count;
  };

  someInstance.pop = function() {
    var tmp;
    if (count > 0) {
      tmp = storage[--count];
      delete storage[count];
    } else {
      return 0;
    }
    return tmp;
    
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};