export const filtrosSelectors = (state) => (
    {orderStar,orderFork, orderIssue,numStar,numFork,numIssue} = state.buscaReducer

)
    
export const filtrosToStateSelectos = (state) => {
    let {orderStar,orderFork, orderIssue,numStar,numFork,numIssue} = filtrosSelectors(state);

    numStar = numStar.toString();
    numFork = numFork.toString();
    numIssue = numIssue.toString();
    let indexSelected = 0;
    
    if (orderFork){
        indexSelected = 1
    }
    if (orderIssue){
        indexSelected=2
    }
    
    return {indexSelected,numStar,numFork,numIssue}
}