import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_ALL_USERS } from '../actions/actions';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
export default function UserTable() {
  const users = useSelector((state) => state.users);
  const usersList = Object.entries(users);
  const error = useSelector((state) => state.usersError);
  const dispatch = useDispatch();
  const { userFormState, setUserFormStateFunc } = useForm();
  const navigate = useNavigate();
  const editUser = async (e, id) => {
    await setUserFormStateFunc('Save');
    // navigate('/editUser/:' + id);
  };
  useEffect(() => {
    dispatch({ type: FETCH_ALL_USERS, payLoad: [] });
  }, []);
  return (
    <div className="user_table">
      <h1>User Table</h1>
      {error.error && <h2 className="error user_error">{error.error}</h2>}
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Status</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {usersList &&
            usersList.length > 0 &&
            usersList.map((data, i) => {
              const [userkey, userData] = [...data];
              return (
                <tr key={`user${userkey}`}>
                  <td>{userData.name}</td>
                  <td>{userData.email}</td>
                  <td>{userData.gender}</td>
                  <td>{userData.status}</td>
                  <td>
                    <button onClick={(e) => editUser(e, userkey)}>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
