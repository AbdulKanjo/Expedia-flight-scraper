import { createStore } from "redux";
import mainReducer from "../ducks/reducers/mainReducer";

export default createStore(mainReducer);
