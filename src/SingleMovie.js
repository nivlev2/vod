import {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './SingleMovie.css'
import NotFound from './NotFound';
function SingleMovie (props){
    console.log(props);
    const [movie,setMovie] = useState('')
    useEffect(()=>{
        const getMovieData =async ()=>{
            const resp = await axios.get(`http://www.omdbapi.com/?i=${props.query}&apikey=fd68d780`)
            console.log(resp.data);
            setMovie(resp.data)
        }
        getMovieData()
    },[props.query])
    console.log(movie);
    if(!props.query){
        return <NotFound/>
    }
    return(
        <div className="container SingleMovie ">
            <div className="row ">
            <div className="row">
                <div className="">
                    <div className="col-md-3 SingleMovie-backHome mx-auto m-2 d-flex ">
                    <Link className=" w-75 text-decoration-none text-light mx-auto" exact to="/">Back Home</Link>
                    </div>
                    </div>
                    </div>

        <div className="p-2 col-md-10 mx-auto  shadow p-3 mb-5 bg-white rounded  ">
            <div className="col-lg-5">
            <img src={movie.Poster} alt={movie.Title} className="float-start width mx-auto"/>

            </div>
            <div className="col-lg-7 text-center float-end">
            {/* <Link className="w-25 badge bg-primary text-decoration-none  mx-5 " exact to="/">Back Home</Link> */}

            <div className="  h1 SingleMovie-title m-5 ">Name: {movie.Title}</div>
            <p className="bg-dark  text-light  mx-5">Actors: {movie.Actors}</p>
            <p className ="bg-warning  text-light mx-5"> Year: {movie.Year}</p>
            <p className ="bg-danger   text-light  mx-5">BoxOffice: {movie.BoxOffice}</p>
            <p className ="bg-info   text-light  mx-5">Released: 
                {movie.Released}</p>
            <p className ="bg-success   text-light  mx-5">Imdb rating: {movie.imdbRating}</p>
            <p className ="bg-primary  text-light  mx-5">Imdb votes: {movie.imdbVotes}</p>

            </div>
        </div>
        </div>
        </div>
    )
}

export default SingleMovie