import {
  DATA_START,
  DATA_SUCCESS,
  DATA_FAILURE,
  DATA_SUCCESS_WED,
  EDIT_CHANGE,
  PLANNER_FORM,
  EDIT_DATA_SUCCESS,
  PLANNER_DATA_SUCCESS,
  DELETE_SUCCESS
} from "../actions";
// const uuidv4 = require("uuid/v4");

const setid = window.localStorage.getItem("CURRENTUSER");

const initialState = {
  currentuser: JSON.parse(setid) ?? { id: 3 },
  loggedin: false,
  planners: [],
  weddings: {
    wedding_name: "",
    wedding_photo: "",
    theme: "",
    wedding_location: "",
    description: ""
  },
  loading: true,
  data: [],
  error: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case DATA_START:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        planners: action.payload
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case PLANNER_DATA_SUCCESS:
      return {
        ...state,
        loading: false
        // data: action.payload
      };
    case EDIT_DATA_SUCCESS:
      return {
        ...state,
        loading: false
        // planners: action.payload
      };
    case DATA_SUCCESS_WED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case PLANNER_FORM:
      return {
        ...state,
        weddings: {
          ...state.weddings,
          weddings: action.payload
        }
      };
    case "LOGGED_STATUS":
      return {
        ...state,
        loggedin: action.payload
      };
    case "CURRENT_USER":
      return {
        ...state,
        currentuser: action.payload
      };
    case EDIT_CHANGE:
      return {
        ...state,
        planners: action.payload
      };
    default:
      return state;
  }
};
