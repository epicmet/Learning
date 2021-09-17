import store from "./store";
import { bugAdded } from "./actions";

store.dispatch(bugAdded("Bug1"));

console.log(store.getState());
