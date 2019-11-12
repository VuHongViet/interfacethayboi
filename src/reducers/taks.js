import * as types from "../constants/taks";

const initialState = {
  visible: false,
  listTask: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK: {
      return {
        ...state.listTask,
        listTask: []
      };
    }
    case types.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state.listTask,
        listTask: data
      };
    }
    case types.FETCH_TASK_FAILURE: {
      const { error } = action.payload;
      return {
        ...state.listTask,
        listTask: []
      };
    }
    case types.CLICK: {
      return {
        ...state.visible,
        visible: true
      };
    }
    default:
      return state;
  }
};
export default reducer;
