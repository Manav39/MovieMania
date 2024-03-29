import React,{useEffect,useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//921e7e79
const API_URL="http://www.omdbapi.com?apikey=921e7e79"
const App=()=> {
  const [movies,setMovies]=useState([]);
  const [searcTerm,setSearchTerm]=useState("");
    const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search);
    }
  useEffect(()=>{
    searchMovies('spiderman');
  },[]);
  return (
    <div className="app">
      <h1>MovieMania</h1>
      <div className="search">
        <input
        placeholder="Search for Movies"
        value={searcTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
         />
         <img
         src={SearchIcon}
         alt="search"
         onClick={()=>searchMovies(searcTerm)}
         />
      </div>
      {
        movies?.length>0
        ?(
          <div className="container">
            {movies.map((movie)=>(
              <MovieCard movie={movie}></MovieCard>
            ))}
            </div>
        ):(
          <div className="empty">
            <h2>No Movies Found</h2>
            </div>
        )

      }
    </div>
  );
}
console.log("romil ")
export default App;
