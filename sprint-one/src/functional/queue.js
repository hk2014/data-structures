var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var tail = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {  
    storage[count++] = value;
  };

  someInstance.dequeue = function() {

    if (count - tail === 0) {
      return undefined;
    }

    var tmp;    
    if (count > 0) {
      tmp = storage[tail];
      delete storage[tail];
      tail++;
      return tmp;   
    } else {
      return 0;
    }
  };

  someInstance.size = function() {
    return count - tail;
  };

  return someInstance;
};

var queue = new Queue();
queue.enqueue('a');
queue.dequeue();
queue.dequeue();
queue.size();