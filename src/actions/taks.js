import * as taskApis from "./../apis/Service";
export const fetchListTask = () => {
  return dispatch => {
    taskApis
      .fetchData()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
