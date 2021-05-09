// import { render } from '@testing-library/react'
// import {useState} from 'react'

import React,{useState} from 'react'
import VodList from './VodList'
import getDataState from './hooks/getMoviesHook'
import NavBar from './NavBar'
function AppVod(){
    const movies_arr = []
    const {arr,changeArr} = getDataState(movies_arr);
    const [movieName,setMovieName] = useState("black")
    const inputValue = (e) =>{
        console.log(e.target.value);
    }
    const searchMovie = (val)=>{
        setMovieName(val)
        console.log(movieName);
    }
    console.log(arr);
    return(
        <div>
        <h1>Vod work</h1>
        <NavBar searchMovie={searchMovie} inputValue={inputValue}/>
        <VodList movies_arr={arr} changeArr={changeArr}/>
        </div>
    )
}

export default AppVod