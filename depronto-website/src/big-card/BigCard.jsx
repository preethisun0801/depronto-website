import React from 'react'
import "./BigCard.css"
export default function BigCard({category,title,imageUrl,author}) {
  return (
    <div className='bigcard'>
        <div className="image-container">
            <img src={imageUrl}></img>
        </div>
        <div className="text-container">
            <p>{category}</p>
            <h1>{title}</h1>
            <p>{author}</p>
        </div>
    </div>
  )
}
