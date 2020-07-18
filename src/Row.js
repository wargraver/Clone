import React, { useState,useEffect } from 'react'
import axios from './axios.js'
import './row.css'
const base="https://image.tmdb.org/t/p/original/"
function Row({title,fetchurl}){
    const [movies, setmovies]=useState([])
    useEffect(()=>{
        async function fetchdata(){
            const req=await axios.get(fetchurl)
            setmovies(req.data.results)
          //  console.log(req)
            return req
        }
        fetchdata()
    },[])
    return(
        <div className="row">
            <h2 className="text2">{title}</h2>
            <div className="row_poster">
                {movies.map(movie => (
                    <img  key={movie.id} className="poster" src={`${base}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}
export default Row