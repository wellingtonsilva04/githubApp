import {  SET_NOME, SET_FILTROS } from "./action";

const initialState = {
    nome: "",
    orderStar: true,
    orderFork: false,
    orderIssue: false,
    numStar: 0,
    numFork: 0,
    numIssue: 0
} 
export default (state = initialState, action) => {
    switch (action.type) {

        case SET_NOME:
            return { ...state, nome: action.payload };
        default:
            return state
        case SET_FILTROS:
            const {orderStar, orderFork,orderIssue,numStar,numFork,numIssue} = action.payload;
            return {...state, orderStar,orderFork,orderIssue, numStar, numFork,numIssue};
    }
};


  