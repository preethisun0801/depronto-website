import React from 'react'

export default function LongCard({category,title,imageUrl,author,body}) {
  return (
    <div className="longcard">
    <div className="text-container">
    <span className="category">{category}</span>
            <h1>{title}</h1>
            <span className="author">{author}</span>
            <p>{body}</p>
    </div>
    <div className="image-container">
        <img src={imageUrl}></img>
    </div>
</div>
  )
}
