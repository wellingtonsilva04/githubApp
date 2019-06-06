import { SET_ID, SET_NAME, SET_IS_LOGGED, SET_IS_FETCHING } from "./action";

const initialState = {
    id: "",
    isLogged: false,
    name: "",
    isFeching: false
} 
export default (state = initialState, action) => {
    switch (action.type) {

        case SET_NAME:
            return { ...state, name: action.payload };

        case SET_ID:
            return {...state, id: action.payload};

        case SET_IS_FETCHING:
            return {...state, isFeching: action.payload};

        case SET_IS_LOGGED:
            return {...state, isLogged: action.payload};

        default:
            return state
        
    }
};
