// import { render } from '@testing-library/react'
// import {useState} from 'react'

import React,{useState} from 'react'
import VodList from './VodList'
import getDataState from './hooks/getMoviesHook'
import NavBar from './NavBar'
import SingleMovie from './SingleMovie'
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
        <div>
        <h1>Vod work</h1>
        {onSingle? <SingleMovie  /> :
        <div>
        <NavBar searchMovie={searchMovie} />
        <VodList setSQ={setSQ} movieName={movieName} movies_arr={arr} changeArr={changeArr}/>
        </div>
        }
        </div>
    )
}

export default AppVod