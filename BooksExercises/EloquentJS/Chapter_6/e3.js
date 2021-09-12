class Group {
  constructor(){
    this.data = [];
  }
  
  add(value){
    for(let item of this.data) {
      if(value === item) break;
    }
    this.data.push(value);
  }
  
  delete(value){
    for(let item of this.data){
      if(value === item){
        const itemIndex = this.data.indexOf(item);
        let firstPart = this.data.slice(0, itemIndex);
        let secondPart = this.data.slice(itemIndex+1, this.data.length);
        this.data = [...firstPart, ...secondPart];
      }
    }
  }
  
  has(value) {
    for(let item of this.data) {
      if(value === item) return true;
    }
    return false;
  }
  
  static from(newData){
    let group = new Group;
    for(let item of newData) {
      group.add(item);
    }
    return group;
  }
  
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group){
    this.group = group;
    this.position = 0;
  }
  
  next(){
    if(this.position >= this.group.data.length) return {value: undefined, done: true};
    
    let value = this.group.data[this.position];
    this.position++;
    
    return {value, done: false};
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
