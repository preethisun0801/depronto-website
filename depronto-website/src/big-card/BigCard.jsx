import React from 'react'
import { useState,useEffect } from 'react';
import "./BigCard.css"
export default function BigCard() {
    const [data,setData]=useState(null);
    useEffect=(()=>{
        fetch('http://localhost:3001/bigcard').then(res=>{return res.json()}).then((data)=>{setData(data)},[])});
  return (
    <>
    {data.map((data=>{
        <div className='bigcard'>
        <div className="image-container">
            <img src={data.imageUrl}></img>
        </div>
        <div className="text-container">
            <p>{data.category}</p>
            <h1>{data.title}</h1>
            <p>{data.author}</p>
        </div>
    </div>
    }))}
    </>
  
  )
  }

