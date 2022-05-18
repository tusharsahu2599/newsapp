import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate()

  return (
     <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor : 'tomato',
            width: '100%',
            marginTop: '0',
            padding: '15px',


        }}
        >
        <h2>
            Hacker News</h2>
        <input
        style = {{
            width : "70vw",
            margin : "auto",
            padding : "20px",
            fontSize : "1.5rem",

        }}
          type="button"
          placeholder="back"
          onClick={navigate('/')}
        /> 
        </div> 
  )
}
