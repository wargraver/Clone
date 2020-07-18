import React,{useState,useEffect} from 'react'
import axios from './axios.js'
import './banner.css'
//const base="https://image.tmdb.org/t/p/original/"
function Main({fetchurl}){
     const [movies,setmovies]=useState([])
     useEffect(()=>{
       async function fetch(){
           const req=await axios.get(fetchurl)
           const elem=Math.floor(Math.random()*19)
           setmovies(req.data.results[elem])
           /*console.log(req)*/
           return req
       }
       fetch()
     },[])
     console.log(movies.backdrop_path)
     return(
         <header className="banner"
             style={{
                bakgroundSize:"Cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition:"center center",
                 }}>
             <div className="banner_cont">
                <h1 className="text">{movies?.title || movies?.name || movies?.original_name}</h1>
             </div>
             <div className="shade"></div>
         </header>
     )

}
export default Main