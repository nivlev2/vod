import {Link} from 'react-router-dom'
function NotFound(){
    
    return (
        
        <div className="container">
            <div className="card">
                <div className="card-title">Not Found</div>
                <div className="card-text">
                     <Link className="badge bg-dark text-light text-decoration-none" to="/">click here</Link>
                     to go back home 
                </div>
            </div>
        </div>
    )
}

export default NotFound