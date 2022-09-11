import React from 'react'

export default function SmallCard({category,title,imageUrl,author,body}) {
  return (
    <div className='smallcard'>
        <div className="image-container">
            <img src={imageUrl}></img>
        </div>
        <div className="text-container">
            <span className="category">{category}</span>
            <h1>{title}</h1>
            <span className="author">{author}</span>
        </div>
    </div>
  )
}
