import React,{useState,useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import '../styles/NavBar.css'
function NavBar (props){
    const [movie,setMovie] = useState('')
    const {theme} = useContext(ThemeContext)
    const spinner = theme? "DarkSpinner":"RegularSpinner"
    const inputValue = (e) =>{
        setMovie(e.target.value)
    }
    const loading = props.loading? spinner :''
    return(
        <div>
        <div className="container-fluid my-2">
            <div className="strip">
            <h1 className="strip-title">Welcome to VOD</h1>
            </div>
            <div className="container">
            <div className="row ">
                <div className={theme? "bg-secondary":"light-search-bg"}>
                    <div className="col-lg-7 m-2 d-flex">
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                           return props.searchMovie(movie)
                        }} className="col-md-12 form-group">
                        <input value={movie} onChange={inputValue} type="text" placeholder="search movie" className="float-start form-control w-75"/>

                        <button  className={theme? "btn btn-danger float-start":"btn btn-primary float-start"}>Search</button>
                        <div className={`${loading} float-start`}></div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar