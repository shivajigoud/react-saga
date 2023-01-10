import React, { useEffect } from 'react';
import './style.css';
import UserTable from './components/UserTable';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserTable></UserTable>
    </div>
  );
}
