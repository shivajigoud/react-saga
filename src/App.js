import React, { useEffect } from 'react';
import './style.css';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
export default function App() {
  return (
    <div className="container">
      <AddUser></AddUser>
      <UserTable></UserTable>
    </div>
  );
}
