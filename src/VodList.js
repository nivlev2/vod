import {useEffect} from 'react'
import axios from 'axios'
function VodList(props){
    useEffect(()=>{
        const getData = async () => {
            try{
                const resp = await axios.get(`http://www.omdbapi.com/?s=${props.movieName}&apikey=fd68d780`)
                props.changeArr(resp.data.Search)    
            }catch(e){
                console.log(e);
            }
        }
        getData()
    },[props.movieName])      
      return (
          <div className="container">
              <div className="row border">
                  {props.movies_arr.map(item =>{
                      return(
                      <div className="col-lg-6  shadow">
                          <div className="m-3 p-2">
                        <img className="float-start w-25" src={item.Poster} alt={item.title}></img>
                          <h3>{item.Title}</h3>
                          <p>Year:{item.Year}</p>
                          <Link className="btn btn-info" onClick={()=>{
                              props.setSQ(item.imdbID)
                          }} to="/move/:id">MoreInfo</Link>
                          <button onClick={()=>{
                              props.setSQ(item.imdbID)
                          }} className="btn btn-info">More info</button>
                          </div>
                      </div>
                      )
                  })}
              </div>
          </div>
        )

}

export default VodList