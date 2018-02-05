const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USUARIOS_FETCHED':
      return {...state, list: action.payload.data }
      break;
    default: return state
  }
}
