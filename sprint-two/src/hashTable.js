

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.storages = [];
};

HashTable.prototype.insert = function(k, v) {
debugger;

  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) !== undefined) {
    this._storage.set(index, [k, v]);
    // this.storage.set(index,this._storage.get(index));
    
  }

  
  // if (!this.storages) {
  //   this._storage.set(index, v);
  //   storages.push(this._storage.get(index));
  //   //storages.push(this._storage.get(++index));
  // }
  //storages.push( this._storage.get(index) );
  
  this._storage.set(index, v);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var hash = new HashTable();
hash.insert('Steven', 'Seagal');
hash.insert('Steven', 'Jones');
//hash.insert('Steven', 'Gloria');
console.log(hash.retrieve('Steven'));

