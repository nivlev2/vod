import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/SingleMovie.css'
import NotFound from './NotFound';
import {ThemeContext} from '../contexts/ThemeContext'
function SingleMovie (props){
    const [movie,setMovie] = useState('')
    const {theme} = useContext(ThemeContext)
    useEffect(()=>{
        const getMovieData =async ()=>{
            const resp = await axios.get(`https://www.omdbapi.com/?i=${props.query}&apikey=fd68d780`)
            setMovie(resp.data)
        }
        getMovieData()
    },[props.query])
    if(!props.query){
        return <NotFound/>
    }
    const btnMode = theme? "SingleMovie-backHome-Dark":"SingleMovie-backHome"
    const card = theme? "bg-secondary":"bg-white"
    const information = theme? "bg-danger rounded-3":"bg-primary rounded-3"
    return(
        <div className="container SingleMovie ">
            <div className="row ">
            <div className="row">
                <div className="">
                    <div className={`col-md-3 ${btnMode} mx-auto m-2 d-flex `}>
                    <Link className={` w-75 text-decoration-none text-light mx-auto`} exact to="/">Back Home</Link>
                    </div>
                    </div>
                    </div>

        <div className={`p-2 col-md-10 mx-auto  shadow p-3 mb-5 ${card} rounded  `}>
            <div className="col-lg-5">
            <img src={movie.Poster} alt={movie.Title} className="float-start width mx-auto"/>

            </div>
            <div className="col-lg-7 text-center float-end">
            {/* <Link className="w-25 badge bg-primary text-decoration-none  mx-5 " exact to="/">Back Home</Link> */}

            <div className="  h1 SingleMovie-title m-5 ">Name: {movie.Title}</div>
            <p className={`${information}  text-light  mx-5"`}>Actors: {movie.Actors}</p>
            <p className ={`${information}  text-light mx-5`}> Year: {movie.Year}</p>
            <p className ={`${information}   text-light  mx-5`}>BoxOffice: {movie.BoxOffice}</p>
            <p className ={`${information}   text-light  mx-5`}>Released: 
                {movie.Released}</p>
            <p className ={`${information}   text-light  mx-5`}>Imdb rating: {movie.imdbRating}</p>
            <p className ={`${information}  text-light  mx-5`}>Imdb votes: {movie.imdbVotes}</p>

            </div>
        </div>
        </div>
        </div>
    )
}

export default SingleMovie