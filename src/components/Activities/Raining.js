import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Raining extends Component{
    state = ({
        raining: false,

    })
    
    render(){
        return(

            <>
            {this.state.raining
            ?
            <>
                <p>It's raining!</p>
                <Button variant='contained' color='secondary' onClick={() => this.setState({raining:false})}>Make it stop raining</Button>
            </>
            :
            <>
                <p>It's not raining</p>
                <Button variant='contained' color='primary' onClick={() => this.setState({raining:true})}>Make it rain</Button>
            </>
            }



            </>
           
        )
    }
}

export default Raining;