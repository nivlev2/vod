import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {ThemeContext} from '../contexts/ThemeContext'
import {v4 as uuid} from 'uuid'
function VodList(props){
    const [error,setError] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    if(localStorage["movie"]){
        localStorage.removeItem("movie")
    }
    useEffect(()=>{
        const getData = async () => {
            props.loading(true)
            try{
                const resp = await axios.get(`https://www.omdbapi.com/?s=${props.movieName}&apikey=fd68d780`)
                props.changeArr(resp.data.Search) 
                props.loading(false)
                setError(false)
            }catch(e){
                setError(true)
                if(e instanceof TypeError){
                    setErrorMessage("We can't find this movie please try to search different movie")
                }else{
                    setErrorMessage("There is a promblem please try again later")
                }
                props.loading(false)

            }
        }
         getData()
    },[props.movieName]) 
    const {theme} = useContext(ThemeContext)    
    const background = theme? `col-sm-6 shadow bg-secondary text-light`:`col-sm-6 shadow` 
      return (
          <div className="container">
              {!error?
                            <div className="row border">
                  {props.movies_arr.map(item =>{
                      return(
                      <div key={uuid()} className={background}>
                          <div className="m-3 p-2">
                        <img className="float-start w-25" src={item.Poster} alt={item.title}></img>
                          <h3>{item.Title}</h3>
                          <p>Year:{item.Year}</p>
                          <Link onClick={()=>{
                              props.setSQ(item.imdbID)
                          }} className={theme? "btn btn-danger":"btn btn-info"}  to={`/${item.imdbID}`}>MoreInfo</Link>
                          {/* <button onClick={()=>{
                              props.setSQ(item.imdbID)
                          }} className="btn btn-info">More info</button> */}
                          </div>
                      </div>
                      )
                  })}
              </div>:<div className="container p-5 my-5 d-flex align-items-center justify-content-center bg-danger text-white"><h1>{errorMessage}</h1></div>

            }
          </div>
        )

}

export default VodList