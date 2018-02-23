class Sorter {
   constructor () {
    this.arr = [];
    this.comparing = function (a, b) {
      return a - b;
    };

  }

   add(element) {
    this.arr.push(element);

  }

  at(index) {
    return this.arr[index];// your implementation
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
// your implementation
  }

  sort(indices) {
    var newAr = [];
    for (var i = 0; i < indices.length; i++){
          newAr.push(this.arr[indices[i]]);
      }
      indices.sort();
      newAr.sort(this.comparing);
      for (var j = 0; j < indices.length; j++){
          this.arr[indices[j]] = newAr[j];
      }// your implementation
  }

  setComparator(compareFunction) {
    this.comparing = compareFunction;// your implementation
  }
}

module.exports = Sorter;
