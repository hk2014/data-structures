var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};

  extend(someInstance, stackMethods);

  return someInstance;
};


var stackMethods = {};


stackMethods.size = function() {
  return this.count;
};

stackMethods.push = function (value) {
  this.storage[this.count++] = value;
  //return count;
};

stackMethods.pop = function() {

  if (this.count > 0) {
    var temp = this.storage[--this.count];
    delete this.storage[this.count];
    return temp;  
  } else {
    return 0;
  }

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};