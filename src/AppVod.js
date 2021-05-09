import { render } from '@testing-library/react'
import {useState} from 'react'
import VodList from './VodList'
import getDataState from './hooks/getMoviesHook'
function AppVod(){
    const movies_arr = []
    const {arr,changeArr} = getDataState(movies_arr)
    console.log(arr);
    return(
        <div>
        <h1>Vod work</h1>
        <VodList changeArr={changeArr}/>
        </div>
    )
}

export default AppVod