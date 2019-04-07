import { GET_USER_ACTION } from '../actions'

export const user = (prevUser = {}, action = {}) => {
  if (action.type === GET_USER_ACTION) {
    return {
      name: 'Denys'
    }
  }

  return prevUser
}
