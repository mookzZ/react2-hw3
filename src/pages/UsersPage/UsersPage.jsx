import { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersPage.css'
import {Link} from "react-router-dom";

function PostList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, []);

  if (!users) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Список юзеров</h1>
      <div className={'posts-cont'}>
        {users.map(user => (
          <Link to={`./users/${user.id}`} key={user.id}>
            {user.firstName} {user.lastName}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PostList;
