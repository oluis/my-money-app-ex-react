const INITIAL_STATE = { list: [], modeEdit: false }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USUARIOS_FETCHED':
      return {...state, list: action.payload.data }
      break;
    case 'EDIT_USER':
      return {...state, modeEdit: action.payload }
      break;
    default: return state
  }
}
