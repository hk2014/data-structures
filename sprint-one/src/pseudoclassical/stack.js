var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.count++] = value;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    var temp = this.storage[--this.count];
    delete this.storage[this.count];
    return temp;
  } else {
    return 0;
  }
};

Stack.prototype.size = function() {
  return this.count;
};


