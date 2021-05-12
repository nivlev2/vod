import {useState} from 'react'

function useToggle(intialVal = false) {
    const [state,setState] = useState(intialVal)
    const Toggle = ()=>{
        setState(!state)
    }
}

export default useToggle