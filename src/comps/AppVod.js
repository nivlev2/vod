
import React,{useState,useContext} from 'react'
import VodList from './VodList'
import getDataState from '../hooks/getMoviesHook'
import NavBar from './NavBar'
import {Route,Switch} from 'react-router-dom'
import {ThemeContext} from '../contexts/ThemeContext'
import '../styles/AppVod.css'

import SingleMovie from './SingleMovie'
import NotFound from './NotFound'
function AppVod(){
    const movies_arr = []
    const {arr,changeArr} = getDataState(movies_arr);
    const [movieName,setMovieName] = useState("black")
    const [query,setQuery] = useState("")
    const [loading,setLoading] = useState(true)
    const {theme,changeTheme} = useContext(ThemeContext)
    const setSQ = (id)=>{
        setQuery(id)
    }
    const searchMovie = (val)=>{
        setMovieName(val)
    }
    const finishLoad = (val) =>{
        setLoading(val)
    }

    return(
        <div>
                <div className = {theme?"DarkNav":"RegularNav"}>
<div className="form-check form-switch">
<label className ="float-start ms-3 "> Dark Mode</label>

  <input onClick={changeTheme} className="form-check-input ms-5" type="checkbox" id="flexSwitchCheckChecked" />

</div>   
</div>     
        
        <Switch>       
        <Route exact path="/" render={()=>{
                    return(<div>
                    <NavBar loading={loading}  searchMovie={searchMovie} />
                    <VodList loading={finishLoad} setSQ={setSQ} movieName={movieName} movies_arr={arr} changeArr={changeArr}/>
                </div> )       
        }}></Route>
            
            <Route exact path="/:id" render={({match})=>
            <SingleMovie match={match} query={query}/>}></Route>
            <Route component={NotFound}></Route>
        </Switch>
        </div>
    )
}

export default AppVod