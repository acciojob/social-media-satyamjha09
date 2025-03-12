import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PostsList from '../components/PostsList';
import { Link } from 'react-router-dom';

const Users = () => {

    const users = useSelector(state => state.users);
    const posts = useSelector(state => state.posts);
    const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="users-page">
        <ul className="users-list">
        {users.map(user => (
          <li 
            key={user.id}
            style={{
              display: 'block',
              padding: '10px',
              listStyle: 'none'
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
      
      {selectedUser && (
        <>
          <h2>Posts by {users.find(u => u.id === selectedUser).name}</h2>
          <PostsList posts={posts.filter(p => p.authorId === selectedUser)} />
        </>
      )}
    </div>
  )
}

export default Users