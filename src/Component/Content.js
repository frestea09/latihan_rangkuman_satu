import React from 'react'

class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Content'>
                <h3>hello ini Content</h3>
                <p>{this.props.dataContent}</p>
                <p>{this.props.dataLogin}</p>
                <button onClick={this.props.ubahStatus}>Logout</button>
            </div>
        )
    }
}
export default Content