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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
