

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.storages = [];
};

HashTable.prototype.insert = function(k, v) {
debugger
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var bucket = this._storage.get(index);
  // check if empty bucket
    // if empty
      // set a bucket with a tuple inside 

    // if not empty
      // check if key already present
        // if key already there
          // update the value of the k

        // if key not present
          // add the new tuple in your bucket
   if (!bucket) {
      this._storage.set(index, [k, v]);
      
  } else { this._storage.each(retrieve) {
            
          }
       else {
          bucket[i].push(this._storage.get(index));
        }
      }
  } 
  //this._storage.set(index, [k, v]);   

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var returnedTuple = this._storage.get(index);
  return returnedTuple[1];
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

