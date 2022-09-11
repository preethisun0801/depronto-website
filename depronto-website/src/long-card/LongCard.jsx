import React from 'react'
import "./LongCard.css"
import { useState,useEffect } from 'react';
export default function LongCard() {
    const [data,setData]=useState(null);
    useEffect=(()=>{
        fetch('http://localhost:3001/longcard').then(res=>{return res.json()}).then((data)=>{setData(data)},[])});
         return (
            <>{data.map((data=>{<div className="longcard">
            <div className="text-container">
            <span className="category">{data.category}</span>
                    <h1>{data.title}</h1>
                    <span className="author">{data.author}</span>
                    <p>{data.body}</p>
            </div>
            <div className="image-container">
                <img src={data.imageUrl}></img>
            </div>
        </div>}))}</>
    
  )
}
