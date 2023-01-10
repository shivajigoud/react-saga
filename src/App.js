import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/userRouter';
import './style.css';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
