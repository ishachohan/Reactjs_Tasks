import React,{Component} from "react";

function Header(prop){
    return(
        <header style ={{textAlign: 'center', alignSelf : 'center'}} >
            <div>
                <h1>{prop.title}</h1><br/>
            </div>
        </header>
    )
}
export default Header