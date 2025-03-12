import React from 'react'
import Post from './Post'

const PostsList = ({ posts  }) => {
  return (
    <div className="posts-list">
      {posts.map((post, index) => (
        <div key={post.id} className="post-container">
          <Post post={post} />
          <button 
            className="button"
            onClick={() => {/* edit handler */}}
            style={{ position: 'absolute', right: '15px', top: '15px' }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  )
}

export default PostsList