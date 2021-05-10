import React,{useState} from 'react'
import './NavBar.css'
function NavBar (props){
    const [movie,setMovie] = useState('')
    const inputValue = (e) =>{
        setMovie(e.target.value)
    }
    return(
        <div>
        <div className="container-fluid">
            <div className="strip">
            <h1 className="strip-title">Welcome to VOD</h1>
            </div>
            <div className="container">
            <div className="row ">
                <div className="bg-info">
                    <div className="col-lg-7 m-2 d-flex">
                        <input value={movie} onChange={inputValue} type="text" placeholder="search movie" className="form-control w-75"/>
                        <button onClick={()=>{
                            props.searchMovie(movie)
                        }} className="btn btn-warning float-start">Search</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar