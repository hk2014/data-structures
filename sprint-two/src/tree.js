var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  
  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var contains = false;
  
  var search = function (target, tree) {
    
    var leaf = tree.value;
    
    if (leaf === target) {
      contains = true;
    }

    for (var i = 0; i < tree.children.length; i++) {
      search(target, tree.children[i]);
    }
  };

  search(target, this);
  return contains;
};

var extend = function(to, from) {
  for (key in from) {
    to[key] = from[key];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
