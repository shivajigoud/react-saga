import React, { useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_ALL_USERS } from './actions/actions';
export default function App() {
  const { users, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_ALL_USERS, payLoad: [] });
  }, [dispatch]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ul>
        {users &&
          users.map((data, i) => {
            return <li key={`user${i}`}>{data.email}</li>;
          })}
      </ul>
    </div>
  );
}
