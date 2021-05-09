import {useEffect} from 'react'
import axios from 'axios'
function VodList(props){
    useEffect(()=>{
        const getData = async () => {
            try{
                const resp = await axios.get('http://www.omdbapi.com/?s=black&apikey=fd68d780')
                props.changeArr(resp.data.Search)
                console.log(resp.data.Search);
    
            }catch(e){
                console.log(e);
            }
        }
        getData()
    },props.movies_arr)      
      return (
          <div className="container">
              <div className="row">
                  {props.movies_arr.map(item =>{
                      return(
                      <div className="col-lg-6 border shadow">
                        <img className="float-start w-25" src={item.Poster} alt={item.title}></img>
                          <h3>{item.Title}</h3>
                          <p>Year:{item.Year}</p>
                          <button className="btn btn-info">More info</button>
                      </div>
                      )
                  })}
              </div>
          </div>
        )

}

export default VodList