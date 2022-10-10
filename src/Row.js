import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import { useNavigate } from 'react-router-dom';
function Row({title,fetchUrl,isLargeRow=false}) {
    const [movies,setMovies]=useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const base_url= "https://image.tmdb.org/t/p/original/";
    const navigate = useNavigate();
    useEffect(()=>{
     async function fetchData(){
        const request=await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
     }
     fetchData();
    },[fetchUrl])
  return (
    <div className='row' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        
        <h2>{title}</h2>
        <div className="row__posters">
        {!isHovered && movies.map(movie=>
          ((isLargeRow && movie.poster_path)|| (!isLargeRow && movie.backdrop_path)) &&(
            <img className={`row__poster ${isLargeRow && "row__posterLarge" }`}
            key={movie.id}
           src={`${base_url}${
             isLargeRow? movie.poster_path : movie.backdrop_path
           }`} alt={movie.name} />
          )
            )}
            {isHovered && movies.map(movie=>
          ((isLargeRow && movie.poster_path)|| (!isLargeRow && movie.backdrop_path)) &&(
            <img className={`row__poster ${isLargeRow && "row__posterLarge" }`}
            key={movie.id}
           src={`${base_url}${
             isLargeRow? movie.poster_path : movie.backdrop_path
           }`} alt={movie.name}  onClick={()=>navigate('/player')}  />
            ) 
            
            )} 
        </div>
        
    </div>
  )
}


export default Row