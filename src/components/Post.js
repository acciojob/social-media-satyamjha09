import React from 'react'
import { useDispatch } from 'react-redux';
import Reactions from './Reactions';
import { addReaction, editPost } from '../store';
import { useNavigate } from 'react-router-dom';


const Post = ({ post }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reactionsEmojis = ['👍', '❤️', '😲', '😢', '👎'];

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Reactions post={post} />
      <button 
        className="button"
        onClick={() => navigate(`/edit/${post.id}`)}
        style={{ position: 'absolute', right: '15px', top: '15px' }}
      >
        Edit
      </button>
      <div className="reactions-container">
        {reactionsEmojis.map(emoji => (
          <button
            key={emoji}
            onClick={() => dispatch({
              type: 'posts/addReaction',
              payload: { postId: post.id, emoji }
            })}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Post