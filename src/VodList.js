import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import SingleMovie from './SingleMovie'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
function VodList(props){
    useEffect(()=>{
        const getData = async () => {
            try{
                const resp = await axios.get(`https://www.omdbapi.com/?s=${props.movieName}&apikey=fd68d780`)
                props.changeArr(resp.data.Search)    
            }catch(e){
                console.log(e);
            }
        }
        getData()
    },[props.movieName])      
      return (
          <div className="container my-2">
              <div className="row border">
                  {props.movies_arr.map(item =>{
                      return(
                      <div key={uuid()} className="col-md-6  shadow">
                          <div className="m-3 p-2">
                        <img className="float-start w-25" src={item.Poster} alt={item.title}></img>
                          <h3>{item.Title}</h3>
                          <p>Year:{item.Year}</p>
                          <Link onClick={()=>{
                              props.setSQ(item.imdbID)
                          }} className="btn btn-info"  to={`/${item.imdbID}`}>MoreInfo</Link>
                          {/* <button onClick={()=>{
                              props.setSQ(item.imdbID)
                          }} className="btn btn-info">More info</button> */}
                          </div>
                      </div>
                      )
                  })}
              </div>
          </div>
        )

}

export default VodList