import {  SET_USUARIOS, SET_IS_FETCHING } from "./action";

const initialState = {
    usuarios: [],
    isFetching: false
} 
export default (state = initialState, action) => {
    switch (action.type) {

        case SET_USUARIOS:
            return { ...state, usuarios: action.payload };
        case SET_IS_FETCHING:
            return {...state,isFetching: action.payload }
        default:
            return state
    }
};

