function AddTemplate(template: string, elID: string) {
  return function (constructor: any) {
    const newPers = new constructor();
    const targetEl = document.getElementById(elID) as HTMLDivElement;
    targetEl.innerHTML = `${template} - ${newPers.name}`;
  };
}

function Log(target: any, pName: string) {
  console.log("in LOG");
  console.log(target);
  console.log(pName);
}

@AddTemplate("<h1>Welcome back</h1>", "app")
class Person {
  @Log
  name = "Matthew";
  constructor() {
    console.log("making new Person");
  }
}
