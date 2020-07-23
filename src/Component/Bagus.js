import React from 'react'
import './css/styles.css'
import { render } from '@testing-library/react'

function Bagus(){
    return(
        <React.Fragment>
             <h3 id='bagus'>Hello ini Bagus</h3>
        </React.Fragment>
    )
}

export default React.memo(Bagus) 