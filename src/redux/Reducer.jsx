import { createStore } from "redux";
import rootreducer from "./action/reducer";

const store = createStore(rootreducer);

export default store;