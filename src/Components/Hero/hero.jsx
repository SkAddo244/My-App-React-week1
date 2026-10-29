import React from 'react'
import { useState } from 'react';

function hero() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="hero">
        <h1>Welcome to the Hero Section</h1>
        <p>This is a simple hero section component.</p>

    <button onClick={() => setLiked(!liked)}>
            {liked ? " ❤ Liked" : " Like"}
    </button>
    </div>
  )
}

export default hero