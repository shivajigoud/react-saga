import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_ALL_USERS } from '../actions/actions';

export default function UserTable() {
  const users = useSelector((state) => state.users);
  const usersList = Object.entries(users);
  const error = useSelector((state) => state.usersError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_ALL_USERS, payLoad: [] });
  }, []);
  return (
    <div className="user_table">
      <h1>User Table</h1>

      <h2>{error.error}</h2>
      <table>
        <thead>
          <td>Name</td>
          <td>Email</td>
          <td>Gender</td>
          <td>Status</td>
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}