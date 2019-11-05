import * as types from "../constants/taks";

const initialState = {
  listTask: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK: {
      return {
        ...state,
        listTask: []
      };
    }
    case types.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data
      };
    }
    case types.FETCH_TASK_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        listTask: []
      };
    }
    default:
      return state;
  }
};
export default reducer;
