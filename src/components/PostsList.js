import React from 'react'
import Post from './Post'

const PostsList = ({ posts  }) => {
  return (
    <div className="posts-list">
    {posts.map((post, index) => (
      <div key={post.id} className={`post-container-${index + 1}`}>
      <Post post={post} />
    </div>
    ))}
  </div>
  )
}

export default PostsList