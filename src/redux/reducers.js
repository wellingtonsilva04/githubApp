import { combineReducers } from "redux";
import reposReducer from "./repos/reducer";
import buscaReducer from "./busca/reducer";
import usuariosReducer from "./users/reducer";



export default combineReducers({reposReducer, buscaReducer, usuariosReducer});
