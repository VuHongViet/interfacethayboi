import * as types from "../constants/taks";

const initialState = {
  showLoading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK: {
      return {
        state
      };
    }
    default:
      return state;
  }
};
export default reducer;
