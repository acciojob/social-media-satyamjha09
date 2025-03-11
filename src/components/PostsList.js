import React from 'react'
import Post from './Post'

const PostsList = ({ posts  }) => {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostsList