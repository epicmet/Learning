import configureStore from "./store/configureStore";
import { assignBugToUser, loadData, resolveBug } from "./store/bugs";

const store = configureStore();

store.dispatch(loadData());

setTimeout(() => store.dispatch(assignBugToUser(4, 1)), 2000);
