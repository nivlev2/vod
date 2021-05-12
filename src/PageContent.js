import React,{useContext} from 'react'
import {ThemeContext} from './contexts/ThemeContext'

export default function PageContent(props){
    const {theme} = useContext(ThemeContext)
    const styles = {
        backgroundColor: theme? "black" : "white",
        height:"100vh",
        width:"100vw"
    }
    return <div style={styles}>{props.children}</div>

}