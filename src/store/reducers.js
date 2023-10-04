import { combineReducers } from "redux";

const initialState = { taskList: [], users:[], loading:true };

function tasks(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, taskList: [...state.taskList, action.newTask] };
    case "GET_USERS":
      return { ...state, users: action.payload, loading: false };
    case "USERS_ERROR":
      return { error: action.payload, loading: false };
    default:
      return { ...state };
  }
}

export default combineReducers({
  tasks,
});