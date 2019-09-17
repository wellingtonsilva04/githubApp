export const SET_NAME = 'SET_NAME';
export const SET_IS_LOGGED = 'SET_IS_LOGGED';
export const SET_ID = 'SET_ID';
export const IS_FETCHING = 'IS_FETCHING';

export const setName = (name) => ({
  type: SET_NAME,
  payload: name
})

export const setIsLogged = (isLogged) => ({
  type: SET_IS_LOGGED,
  payload: isLogged
})

export const setId = (id) => ({
  type: SET_ID,
  payload: id
})

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: isFetching
})




