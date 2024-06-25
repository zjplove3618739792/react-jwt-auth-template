// src/components/Dashboard.jsx

import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        There is nothing here, dumbass.
      </p>
    </main>
  );
};

export default Dashboard;
  