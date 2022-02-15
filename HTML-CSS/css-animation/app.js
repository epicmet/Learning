const p = document.querySelector("p");

p.addEventListener("animationstart", listener);
p.addEventListener("animationiteration", listener);
p.addEventListener("animationend", listener);

function listener(e) {
  switch (e.type) {
    case "animationstart":
      console.log("start");
      break;
    case "animationiteration":
      console.log("iteration");
      break;
    case "animationend":
      console.log("end");
      break;
  }
}

p.className = "text";
