import React from 'react'
import { useDispatch } from 'react-redux';
import Reactions from './Reactions';
import { addReaction, editPost } from '../store';


const Post = ({ post }) => {

    const dispatch = useDispatch();
    const reactionsEmojis = ['👍', '❤️', '😲', '😢', '👎'];

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="post-actions">
        <Reactions post={post} />
        
        <button 
          className="button edit-button"
          onClick={() => navigate(`/edit/${post.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default Post