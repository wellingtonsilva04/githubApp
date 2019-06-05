import { getUsuarios } from "../users/action";
import { getRepos } from "../repos/action";

export const SET_NOME = 'SET_NOME';
export const SET_FILTROS = 'SET_FILTROS'

export const setNome = (nome) => ({
  type: SET_NOME,
  payload: nome
});

export const setFiltros = (filtros) => ({
  type: SET_FILTROS,
  payload: filtros
})
  ;
export function buscar() {
  return function fetching(dispatch, getState) {
    dispatch(getUsuarios())
    dispatch(getRepos())
  }
}


verifacarTextoVazio = (texto) => (texto.length === 0 ? 0 : parseInt(texto))

indiceToTypeSelected = (selectedIndex) => {
  let orderStart = false, orderFork = false, orderIssue = false;

  if (selectedIndex === 0) {
    orderFork = true
  } else {
    if (selectedIndex === 1) {
      orderFork = true
    } else {
      orderIssue = true
    }
  }

  return { orderStart, orderFork, orderIssue }
}


export function aplicarFiltro(filtros) {
  return function fetching(dispatch, getState) {
    console.log("d", filtros)
    let { selectedIndex, numStar, numFork, numIssue } = filtros;
    numStar = verifacarTextoVazio(numStar);
    numFork = verifacarTextoVazio(numFork);
    numIssue = verifacarTextoVazio(numIssue);
    const order = indiceToTypeSelected(selectedIndex);
    const newFiltros = { ...order, numStar, numFork, numIssue }
    dispatch(setFiltros(newFiltros))
  }
}