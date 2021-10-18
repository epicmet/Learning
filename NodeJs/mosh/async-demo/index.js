console.log("Before");
// getUser(1, (user) => {
//   console.log("User:", user);
//   getGithubRepos(user.name, (repos) => {
//     console.log(repos);
//   });
// });
console.log("After");

function getUser(id, cb) {
  setTimeout(() => {
    console.log("Reading user...");
    cb({ id: id, name: "matthew" });
  }, 2000);
}

function getGithubRepos(username, cb) {
  console.log(`Reading ${username} data from github...`);
  setTimeout(() => {
    cb(["repo1", "repo2"]);
  }, 2000);
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("P1");
    resolve(1);
  }, 2100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("P2");
    //resolve(2);
    reject;
  }, 2000);
});

Promise.race([p1, p2]).then((res) => console.log(res));
