import * as taskConstants from "./../constants/taks";

export const fetchListTask = (params = {}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      params
    }
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILURE,
    payload: {
      error
    }
  };
};
