import React from 'react'
function NavBar (props){
    
    return(
        <div className="container">
            <div className="row">
                <div className="bg-info">
                    <div className="col-lg-6 m-2 d-flex">
                        <input onInput={props.inputValue} type="text" placeholder="search" className="form-control"/>
                        <button className="btn btn-warning float-start">Search</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar