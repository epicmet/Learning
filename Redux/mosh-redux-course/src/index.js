import configureStore from "./store/configureStore";
import { loadData, resolveBug } from "./store/bugs";

const store = configureStore();

store.dispatch(loadData());

setTimeout(() => store.dispatch(resolveBug(2)), 2000);
