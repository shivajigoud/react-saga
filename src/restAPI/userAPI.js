import { axios } from 'axios';
const userAPI = () => {
  fetchAllUsers = () => {
    return fetch('https://gorest.co.in/public/v2/users');
  };
  return { fetchAllUsers };
};

export default userAPI();
