import { axios } from 'axios';
const userAPI = () => {
  const fetchAllUsers = () => {
    return fetch('https://gorest.co.in/public/v2/users')
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };
  const createUser = (user) => {
    return fetch(
      'https://gorest.co.in/public/v2/users',
      { method: post },
      { data: JSON.stringify(user) }
    )
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };
  const updateUser = (id, user) => {
    return fetch(
      'https://gorest.co.in/public/v2/users/' + id,
      { method: patch },
      { data: JSON.stringify(user) }
    )
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };
  const deleteUser = (id) => {
    return fetch('https://gorest.co.in/public/v2/users/' + id, { method: post })
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };
  const fetchUser = (id) => {
    return fetch('https://gorest.co.in/public/v2/users/' + id)
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };
  return { fetchAllUsers, createUser, updateUser, deleteUser, fetchUser };
};

export default userAPI();
