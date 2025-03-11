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
      <h1>Users</h1>
        <div className="users-list">
          {users.map((user, index) => (
            <a
              key={user.id}
              href={`/users/${user.id}`}
              className={`user-${index + 1}`}
              style={{ display: 'block', padding: '10px' }}
            >
              {user.name}
            </a>
          ))}
        </div>
      
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