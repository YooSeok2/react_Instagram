import React, {Component} from 'react';
import Register from '../pages/Register';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as todoAction from '../store/modules/register';


class RegisterContainer extends Component {
    handleChange_address = (e)=>{
        const {TodoActions} = this.props;
        TodoActions.insert_address(e.target.value);
    }

   

    handleChange_sign = (e)=>{
        const {TodoActions}=this.props;
        TodoActions.insert_sign(e.target.value);
        
    }

   

    handleChange_name = (e)=>{
        const {TodoActions}=this.props;
        TodoActions.insert_name(e.target.value);
       
    }
  

    handleChange_password = (e)=>{
        const {TodoActions}=this.props;
        TodoActions.insert_password(e.target.value);
       
    }
    



    change_page = ()=>{
        const {address, name, sign, password, TodoActions} = this.props;
        
        if(address === '' || name ==='' || sign === '' ||
        password ===''){
            TodoActions.set_style('articleChild2_div1_main_form_div4_warning');
            TodoActions.set_warning('모든 정보를 입력해주세요.');
            TodoActions.set_to('/');

        }else if(address.indexOf('@')===-1 && address.length<10){
            TodoActions.set_style('articleChild2_div1_main_form_div4_warning');
            TodoActions.set_warning('이메일 주소를 확인해주세요.');
            TodoActions.set_to('/');
        }else if(password.length<6){
            TodoActions.set_style('articleChild2_div1_main_form_div4_warning');
            TodoActions.set_warning('비밀번호를 확인해주세요');
            TodoActions.set_to('/');
        }else{
            TodoActions.set_to('/about');
        }
    }

   
    

   

    render(){
        const {handleChange_address,handleChange_name,
            handleChange_password,handleChange_sign, change_page} = this;
        const {style,warning,to, address,name, sign, password}=this.props;
        
        return(
            <Register 
            to={to}
            changepage={change_page}
            address = {handleChange_address}
            name = {handleChange_name}
            sign = {handleChange_sign}
            password = {handleChange_password}
            style ={style}
            warning = {warning}
            ad={address}
            na={name}
            si={sign}
            pass={password}
             />
        );
    }
}

export default connect(
({register})=>({
    address : register.get('address'),
    name : register.get('name'),
    sign: register.get('sign'),
    password : register.get('password'),
    warning : register.get('warning'),
    style : register.get('style'),
    to : register.get('to')
    
}),
(dispatch)=>({
    TodoActions : bindActionCreators(todoAction, dispatch)
})
)(RegisterContainer);