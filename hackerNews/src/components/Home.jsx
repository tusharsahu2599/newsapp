import React from "react";
import { useState, useEffect } from "react";
import NewsComponents from "./NewsComponents";
import axios from "axios";

function Home() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
  function fetchData() {
      setLoading(true);
      setNotices([]);
      axios.get(`https://hn.algolia.com/api/v1/search?query=${debouncedSearch}`)
      .then(response => {
        setNotices(response.data.hits);
        setLoading(false);
      });
    }
    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  }

  return (
    <div className="container" 
    style = {{
        width : '100vw',
        height : '100vh',
        fontSize : '1rem',
        backgroundColor: '#f5f5f5',
    }}

    >
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
          type="search"
          placeholder="type here"
          onChange={(e) => setSearch(e.target.value)}
        />
        </div>

        {loading && <p>Loading...</p>}
        {notices.map((notice) => {
          return (
            <div key={notice.objectID} className="notice" 
            style = {{
                backgroundColor: "white",
                padding: "10px",
                border: "1px solid white",
            }}
            >
              <NewsComponents
                id={notice.objectID}
                title={notice.title}
                url={notice.url}
                author={notice.author}
                points={notice.points}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Home;
