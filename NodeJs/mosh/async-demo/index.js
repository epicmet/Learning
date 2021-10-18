console.log("Before");
getUser(1, (user) => {
  console.log("User:", user);
  getGithubRepos(user.name, (repos) => {
    console.log(repos);
  });
});
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
