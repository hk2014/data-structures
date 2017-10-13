var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newLastNode = new Node(value);
    var currentLastNode = list.tail;
    list.tail = newLastNode;

    if (list.head === null) {
      list.head = newLastNode;
    } else {
      currentLastNode.next = newLastNode;    
    }
   
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = temp.next;
    return temp.value;  
  };

  list.contains = function(target) {
    var contains = false;
    var node = list.head;
    while(node){
    if(node.value === target){
    contains= true;
  }
    node = node.next;
  
  }
    // while (newLastNode.next !== null) {
    //   if (newLastNode.value === target) {
    //     contains = true;
    //   }
    // }
    
    return contains;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var circle = new LinkedList();
circle.addToTail('a');
circle.addToTail('b');
//circle.contains('a');
console.log(circle);

/*
 * Complexity: What is the time complexity of the above functions?
 */
