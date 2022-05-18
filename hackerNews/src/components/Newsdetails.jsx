import React,{useEffect,useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom' 
import axios from 'axios';
import "../styles/styles.css"
// import Header from './Header';

function NewsDetails() {

    const { id } = useParams()
    const [notice, setNotice] = useState({})
    const [loading, setLoading] = useState(false)
    const [children, setChildren] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        axios.get(`https://hn.algolia.com/api/v1/items/${id}`)
        .then(response => {
            // console.log(response.data);
            setNotice(response.data);
            setLoading(false)
            setChildren(response.data.children)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    
  return (
    <div className="container"
    style={{
        width : '100vw',
        overflow : 'hidden',
    }}
    >
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor : 'tomato',
            width: '100%',
            marginTop: '0',
            padding: '15px'
        }}
        >
        <h2>
            Hacker News</h2>
            <button
            style={{ 
                backgroundColor : 'royalblue',
                color : 'white',
                width: '5vw',
                height: '5vh',
                border : 'none',
                marginRight : '30px',
            }}
            onClick={()=>{navigate('/')}}>back</button>
        </div> 
        
        <main className="main">
            <div className="notice">
                <div>
                {loading && <p>Loading...</p>}

                    <h3
                    style={{
                        marginLeft: '15px',

                    }}
                    >
                       Title : {notice.title}
                       <br />
                       Points : {notice.points}
                    </h3>
                    <h3
                    style={{
                        marginLeft: '15px',
                    }}
                    >Comments</h3>
                        {children.map(child => {
                            return (     

        <ul className="d-flex justify-content-center py-2" key={child.id}>
        <li className="second py-2 px-2"> <span className="text1"> {child.text}</span>
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><span className="text2">{child.type}</span></div>
            </div>
        </li>
    </ul>
        )
    })}
    </div>
                </div>
            </main>
            </div>
    );
}


export default NewsDetails