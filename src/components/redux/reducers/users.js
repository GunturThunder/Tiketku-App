const initialState = {
    users: [],
    user: null
}

const users = (state = initialState, action) => {
    // console.log(action.type)s
  switch (action.type) {
    case 'GET_USERS_PENDING':
      return {
        ...state
        // isLoading: true
      }

    case 'GET_USERS_REJECTED':
      return {
        ...state
        // isLoading: true
      }

    case 'GET_USERS_FULFILLED':
      // console.log('halo', action.payload.data.result)
      return {
        ...state,
        // isLoading: false,
        users: action.payload.data.result
      }

      case 'UPDATE_USERS_PENDING':
      return {
        ...state
        // isLoading: true
      }

    case 'UPDATE_USERS_REJECTED':
      return {
        ...state
        // isLoading: true
      }

    case 'UPDATE_USERS_FULFILLED':
      // console.log('halo', action.payload.data.result)
      const newUserAfterUpdate = state.users.map(user => {
        if (user.id === action.payload.data.result.id) {
          return action.payload.data.result
        }
        return user
      })
      return {
        ...state,
        // isLoading: false,
        users: newUserAfterUpdate
      }
    default:
        return state;
    }
}

export default users;

