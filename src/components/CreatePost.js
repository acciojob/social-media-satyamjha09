import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CreatePost = () => {

    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('');
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({
          id: Date.now(),
          title,
          authorId: Number(authorId),
          content,
          reactions: {}
        }));
        setContent('');
        setAuthorId('');
    };


  return (
    <form onSubmit={handleSubmit}>
      <select 
        id="postAuthor"
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
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
      />
      <button type="submit">Create Post</button>
    </form>
  )
}

export default CreatePost