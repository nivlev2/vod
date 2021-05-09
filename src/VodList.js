import {useEffect} from 'react'
import axios from 'axios'
function VodList(){
    useEffect(()=>{
        const getData = async () => {
            const resp = await axios.get('http://www.omdbapi.com/?s=black&apikey=fd68d780')
            this.props.changeArr(resp.data.Search)
            console.log(resp.data.Search);
        }
        getData()
    })      
      return (
            <h1>work</h1>
        )

}

export default VodList