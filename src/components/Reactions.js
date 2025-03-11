import React from 'react'

const Reactions = () => {
  return (
    <div className="reactions">
      {Object.entries(post.reactions || {}).map(([emoji, count]) => (
        <span key={emoji}>{emoji} {count}</span>
      ))}
    </div>
  )
}

export default Reactions