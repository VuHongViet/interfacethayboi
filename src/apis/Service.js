import axiosService from "./../commons/axiosService";
const url = "http://5d95bbe0a824b400141d1e9a.mockapi.io/api/products";
export const fetchData = () => {
  return axiosService.get(url);
};
