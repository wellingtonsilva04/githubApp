import { getUsuarios } from "../users/action";
import { getRepos } from "../repos/action";

export const SET_NOME = 'SET_NOME';

export const setNome = (nome) => ({
    type: SET_NOME,
    payload: nome
  });


  export function buscar() {
    return function fetching (dispatch, getState) {
      dispatch(getUsuarios())
      dispatch(getRepos())
    }
  }