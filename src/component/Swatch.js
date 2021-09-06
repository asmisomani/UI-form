import React ,{useState} from 'react'



export default function Swatch(props) {
    
    
    return (
        <button className="swatch" style={props.style}  onClick={props.colorHandler} >
            {props.title} <span className="hash">{props.hash}</span>
        </button>
    )
}
