

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};
 
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
//debugger;

  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes[node] = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    if (this.nodes[fromNode].indexOf(toNode) !== -1 && this.nodes[toNode].indexOf(fromNode) !== -1) {
      return true;
    }
  }
  return false;
};
// debugger;
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if ( this.nodes[fromNode] && this.nodes[toNode] ) {
    idxTo = this.nodes[fromNode].indexOf(toNode);
    idxFrom = this.nodes[toNode].indexOf(fromNode);
  if (idxTo !== -1 && idxFrom !==-1){
      this.nodes[fromNode].splice(idxTo,1);
      this.nodes[toNode].splice(idxFrom,1); 
 }
  }
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
 for(var key in this.nodes){
  cb(Number(key));
}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// var graph = new Graph();
// graph.addNode('1');
// graph.addNode('5');
// graph.addNode('2');
// // graph.addEdge(graph.nodes['1'],'g');
// // graph.addEdge(graph.nodes['1'],'b');
// // console.log(graph);




