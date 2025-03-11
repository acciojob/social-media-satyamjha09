// src/pages/Home.jsx
import React from 'react'
import PostsList from '../components/PostsList'
import { useSelector } from 'react-redux'

const Home = () => {

    const posts = useSelector(state => state.posts)

  return (
    <div className="posts-page">
        <h1>All Posts</h1>
        <PostsList posts={posts} />
    </div>
  )
}

export default Home