import { axios } from 'axios';
const userAPI = () => {
  const fetchAllUsers = () => {
    return fetch('https://gorest.co.in/public/v2/users')
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };
  return { fetchAllUsers };
};

export default userAPI();
