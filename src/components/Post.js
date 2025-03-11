import React from 'react'
import { useDispatch } from 'react-redux';
import Reactions from './Reactions';
import { addReaction, editPost } from '../store';


const Post = ({ post }) => {

    const dispatch = useDispatch();
  const reactionsEmojis = ['👍', '❤️', '😲', '😢', '👎'];

  return (
    <div className="post">
      <p>{post.content}</p>
      <div className="post-footer">
        <Reactions post={post} />
        <div className="reactions-container">
          {reactionsEmojis.map(emoji => (
            <button 
              key={emoji}
              onClick={() => dispatch(addReaction({
                postId: post.id,
                emoji
              }))}
            >
              {emoji}
            </button>
          ))}
        </div>
        <Link to={`/edit/${post.id}`} className="button">
          Edit
        </Link>
      </div>
    </div>
  )
}

export default Post