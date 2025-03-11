import React from 'react'
import { useDispatch } from 'react-redux';
import Reactions from './Reactions';
import { addReaction, editPost } from '../store';


const Post = ({ post }) => {

    const dispatch = useDispatch();
    const reactionsEmojis = ['👍', '❤️', '😲', '😢', '👎'];

  return (
    <div className="post">
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      <div className="post-actions">
        <Reactions post={post} />
        <button 
          className="button"
          style={{ 
            position: 'absolute',
            right: '0',
            top: '0',
            margin: '10px'
          }}
          onClick={() => navigate(`/edit/${post.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default Post