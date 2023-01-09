import { axios } from 'axios';
export const userAPI = () => {
  fetchAllUsers = () => {
    return axios.get('https://gorest.co.in/public/v2/users');
  };
  return { fetchAllUsers };
};
