import Api from "../../config/api";
export const SET_USUARIOS = 'USER/SET_USUARIOS';
export const SET_IS_FETCHING = 'USER/SET_IS_FETCHING';

export const setUsuarios = (usuarios) => ({
    type: SET_USUARIOS,
    payload: usuarios
  });

export const setIsFetching = (isFetching) =>({
    type: SET_IS_FETCHING,
    payload: isFetching
})


export function getUsuarios() {
    return function fetching (dispatch, getState) {
      dispatch(setIsFetching(true))
      const {nome} = getState().buscaReducer;
      Api(`search/users?q=${nome}`)
        .then(response => {
            console.log(response.data);
          dispatch(setUsuarios(response.data.items));
          dispatch(setIsFetching(false));
        })
        .catch(error => {
            console.log(error);
          dispatch(setIsFetching(false));
        })
    }
  }