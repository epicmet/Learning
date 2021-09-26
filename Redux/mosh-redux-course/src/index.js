import configureStore from "./store/configureStore";
import { loadData } from "./store/bugs";

const store = configureStore();

store.dispatch(loadData());
