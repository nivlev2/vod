
import React,{useState} from 'react'
import VodList from './VodList'
import getDataState from './hooks/getMoviesHook'
import NavBar from './NavBar'
import {Route,Switch} from 'react-router-dom'
import './AppVod.css'

import SingleMovie from './SingleMovie'
import NotFound from './NotFound'
function AppVod(){
    const movies_arr = []
    const {arr,changeArr} = getDataState(movies_arr);
    const [movieName,setMovieName] = useState("black")
    const [query,setQuery] = useState("")
    const setSQ = (id)=>{
        setQuery(id)
        console.log(query);
    }
    // TODO ליצור ראוט שלוקח לעמוד של קומפוננטה של סינגל מובי ולהעביר את הקווארי בתור פרמטר של היו אר אל ושם לעשות גט למובי הספציפי הזה
    console.log(query);
    const searchMovie = (val)=>{
        setMovieName(val)
    }
    console.log(movieName);
    console.log(arr);

    return(
        <div className="container-fluid">
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>        {/* <div>
            <NavBar  searchMovie={searchMovie} />
            <VodList changeToSingle={changeToSingle} setSQ={setSQ} movieName={movieName} movies_arr={arr} changeArr={changeArr}/>
        </div> */}
        
        <Switch>       
        <Route exact path="/" render={()=>{
                    return(<div>
                    <NavBar  searchMovie={searchMovie} />
                    <VodList setSQ={setSQ} movieName={movieName} movies_arr={arr} changeArr={changeArr}/>
                </div> )       
        }}></Route>
         
            <Route exact path="/:id" render={()=><SingleMovie query={query}/>}></Route>
            <Route render={()=><NotFound/>}></Route>
        </Switch>
        </div>
    )
}

export default AppVod