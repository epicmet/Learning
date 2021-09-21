import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch(projectAdded({ name: "Project 1" }));

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugAdded({ description: "Bug3" }));
store.dispatch(bugResolved({ id: 1 }));

store.dispatch(userAdded({ name: "John" }));
store.dispatch(bugAssignedToUser({ userId: 1, bugId: 2 }));

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);
