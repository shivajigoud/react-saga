import React, { useEffect } from 'react';
import './style.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { FETCH_ALL_USERS } from './actions/actions';
export default function App() {
  // const users = useSelector((state) => state.users);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ FETCH_ALL_USERS });
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
