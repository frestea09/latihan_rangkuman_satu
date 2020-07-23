import React from 'react'

function Header(props){
    return(
        <div className='Header'>
            Hello ini adalah Header
            <p>{props.dataHeader}</p>
            <p>{props.dataState}</p>
            <p>Count : {props.dataCount}</p>
            <button onClick={props.methodAlert}>Alert</button>
            <button onClick={props.tambah}>Tambah</button>
        </div>
    )
}

export default Header