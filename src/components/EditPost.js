import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost } from '../store';

const EditPost = () => {


  const { postId } = useParams();
  const posts = useSelector(state => state.posts);
  const post = posts.find(p => p.id === Number(postId));
  const [content, setContent] = useState(post?.content || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost({
      ...post,
      content
    }));
    navigate('/');
  };

  if (!post) return <div>Post not found</div>;

  return (
    <div className="edit-post">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default EditPost