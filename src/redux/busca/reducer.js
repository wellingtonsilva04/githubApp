import {  SET_NOME } from "./action";

const initialState = {
    nome: "",
} 
export default (state = initialState, action) => {
    switch (action.type) {

        case SET_NOME:
            return { ...state, nome: action.payload };
        default:
            return state
    }
};


  