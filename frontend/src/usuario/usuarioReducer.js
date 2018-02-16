const INITIAL_STATE = { list: [], modeEdit: false }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USUARIOS_FETCHED':
      return {...state, list: action.payload.data.map(function(s){
          s['modeEdit'] = false
          return s
        })
      }
      break;
    case 'EDIT_USER':
      return {...state, list: state.list.map(item => item._id === action.payload._id ? {...item, modeEdit: !item.modeEdit} : {...item, modeEdit: false})}
      break;
    default: return state
  }
}
