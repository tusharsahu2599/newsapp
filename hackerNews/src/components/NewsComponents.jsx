import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NewsComponents({id,title, url, author, points}) {
    const navigate = useNavigate() 
    return (
    <div className="notice">
         <div 
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#f5f5f5',
            padding: '15px',
            borderRadius: '0 20px 20px 20px',
            boxShadow: '0px 0px 10px #f5f5f5',
            width: '80vw',
            marginLeft: '25px',
        }}>
        
           <Link
           style={{
               textDecoration:'none',
               textAlign: 'left',
               color: 'black',
           }}
           to={`/items/${id}`}>   
            <h4> Title : {title}</h4>
            Link :<a href={`/items/${id}`}>
                {url}</a>
            <p> Author : {author}</p>
            <p>Points : {points}</p>
            </Link>
        </div>

    </div>
  )
}
