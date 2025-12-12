import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;
  if (error) return <div style={{ padding: '2rem' }}>{error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} (Age: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
