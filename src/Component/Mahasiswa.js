import React from 'react'
import { render } from '@testing-library/react'

function Mahasiswa(props){
    return(
        <div className='Mahasiswa'>
            <p>{props.dataItem.name}</p>
        </div>
    )
}

export default Mahasiswa