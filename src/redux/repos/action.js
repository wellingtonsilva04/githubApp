import Api from "../../config/api";
export const SET_REPOS = 'SET_REPOS';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';


export const setRepos = (repos) => ({
  type: SET_REPOS,
  payload: repos
});


export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: isFetching
});


export function getRepos() {
    return function fetching (dispatch, getState) {
      dispatch(setIsFetching(true))
      const {nome} = getState().buscaReducer;
      Api(`search/repositories?q=${nome}`)
        .then(response => {
            console.log(response.data);
          dispatch(setRepos(response.data.items));
          dispatch(setIsFetching(false));
        })
        .catch(error => {
            console.log(error);
          dispatch(setIsFetching(false));
        })
    }
  }
  



