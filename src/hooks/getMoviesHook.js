import {useState} from 'react'

function getDataState(intialval){
    const [arr,setArr] = useState(intialval)

    const changeArr = (newArr)=>{
        arr.splice(0,arr.length,...newArr)
    }
    return{arr,changeArr}
}

export default getDataState