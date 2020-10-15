import React, {useState} from 'react';

const Nav = (props) =>{
    
    return (<>
    <div> this is from {props.name}!</div>
    <input type="text" onChange={props.change} placeholder='set your name'></input>
    <button onClick={props.click}>Set!</button>
    </>)
}


export default Nav