var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function(){
  return this.count;
};

stackMethods.push = function(val){
  this.storage[this.count++] = val;
};

stackMethods.pop = function(){
  var temp;
  if(this.count > 0){
    temp = this.storage[--this.count];
    delete this.storage[this.count];
  }else{
    return 0;
  }
  
  return temp;

return this.someInstance;
};