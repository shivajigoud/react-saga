import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_USER, FETCH_USER } from '../actions/actions';
import utils from '../utils/utils';
import useForm from '../hooks/useForm';
import { useParams } from 'react-router-dom';
export default function AddUser() {
  let { id } = useParams();
  const { formState, setFormState } = useForm();
  const dispatch = useDispatch();
  const [user, setState] = useState({
    name: '',
    email: '',
    gender: '',
    status: '',
    id: utils.getNewID(1200),
  });
  const handleChange = (e) => {
    setState({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const userSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: CREATE_USER, payLoad: user });
  };
  useEffect(() => {
    formState.toUpperCase() == 'SAVE' &&
      dispatch({ type: FETCH_USER, payLoad: id });
  }, []);
  return (
    <div className="user_form">
      <h1>Create new user</h1>
      <form onSubmit={userSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <label>Gender</label>
        <span>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={user.gender === 'male'}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={user.gender === 'female'}
          />
        </span>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={user.status}
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button>{formState}</button>
      </form>
    </div>
  );
}
