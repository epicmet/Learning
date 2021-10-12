function AddTemplate(template: string, elID: string) {
  return function (constructor: any) {
    const newPers = new constructor();
    const targetEl = document.getElementById(elID) as HTMLDivElement;
    targetEl.innerHTML = `${template} - ${newPers.name}`;
  };
}

@AddTemplate("<h1>Welcome back</h1>", "app")
class Person {
  name = "Matthew";
  constructor() {
    console.log("making new Person");
  }
}
