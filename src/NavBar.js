import React,{useState} from 'react'
function NavBar (props){
    const [movie,setMovie] = useState('')
    const inputValue = (e) =>{
        setMovie(e.target.value)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="bg-info">
                    <div className="col-lg-6 m-2 d-flex">
                        <input value={movie} onChange={inputValue} type="text" placeholder="search" className="form-control"/>
                        <button onClick={()=>{
                            props.setMovieName(movie)
                        }} className="btn btn-warning float-start">Search</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar