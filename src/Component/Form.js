import React from 'react'

function Form(props){
    return(
        <div>
            <form  onSubmit={props.callBoom}>
                <label>Name : </label>
                <input id='inputName' name='inputName' type='text' onChange={props.setInputNama}/>
                <input id='btnSubmit' name='btnSubmit' type='submit' value='Boom'/>
            </form>
            <p>{props.dataInput}</p>
        </div>
    )
}
export default Form