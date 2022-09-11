import React from 'react';
import "./SmallCard.css";
import { useState,useEffect } from 'react';
export default function SmallCard() {
    const [data,setData]=useState(null);
    useEffect=(()=>{
        fetch('http://localhost:3001/smallcard').then(res=>{return res.json()}).then((data)=>{setData(data)},[])});
         return (
            <>{data.map((data=>{
    <div className='smallcard'>
        <div className="image-container">
            <img src={data.imageUrl}></img>
        </div>
        <div className="text-container">
            <span className="category">{data.category}</span>
            <h1>{data.title}</h1>
            <span className="author">{data.author}</span>
        </div>
    </div>
 } ))}</>)
}
