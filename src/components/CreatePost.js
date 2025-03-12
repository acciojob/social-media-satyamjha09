import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({
      id: Date.now(),
      title,
      authorId: Number(authorId),
      content,
      reactions: {},
      date: new Date().toISOString()
    }));
    navigate('/');
  };

  return (
    <div className="create-post">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label id="postTitle">post Title</label>
        <input
          id="postTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          required
          style={{
            display: 'block',
            width: '100%',
            padding: '8px',
            margin: '10px 0',
            boxSizing: 'border-box',
            opacity: 1,
            visibility: 'visible'
          }}
        />
        
        <select 
          id="postAuthor"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          required
        >
          <option value="">Select Author</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>

        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content..."
          required
        />
        
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost