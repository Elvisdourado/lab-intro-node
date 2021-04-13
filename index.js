class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length

  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) =>{
      return a - b
    })
    this.length =  this.items.length
  }
  get(pos) {
    if (!this.items[pos]) throw new error('OutOfBounds')
    return this.items[pos]
  }

  max() {
    if(!this.items.length) throw new Error('EmptySortedList');
    return this.items[this.length -1];
  }

  min() {
    if(!this.items.length) throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    if(!this.items.length) { return 0}
    else {
      return this.items.reduce((a,b) => (a - b), 0)};

  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    }
    else return (this.sum() / this.length);
  } 
}

module.exports = SortedList;
