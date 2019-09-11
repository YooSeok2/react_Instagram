import React, {Component} from 'react';
import About from '../pages/About';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as todoAction from '../store/modules/register';

class AboutContainer extends Component{




    render(){
        const {address, sign, name, password} = this.props;
        
        return(
            <About 
            
            address = {address}
            sign = {sign}
            name = {name}
            password = {password}
            />

        );
    }
}

export default connect(
    ({register})=>({
        address: register.get('address'),
        sign: register.get('sign'),
        name: register.get('name'),
        password:register.get('password')
    }),
    (dispatch)=>({
        TodoActions : bindActionCreators(todoAction, dispatch)
    })
)(AboutContainer);