import { GET_ERRORS, USER_LOADING, SET_CURRENT_USER } from "../actions/types"
const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    isAdmin:false,
    user: {},
    loading: false
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case SET_CURRENT_USER:
          return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            isAdmin: action.payload.type==="admin"?true:false,
            user: action.payload
          };
        case USER_LOADING:
          return {
            ...state,
            loading: true
          };
        default:
          return state;
      }
}