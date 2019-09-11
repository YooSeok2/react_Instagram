import React, { Component } from 'react';
import './App.css';




class Login extends Component{
    
    render(){
        
        return(
        <div>
            <h2 className='articleChild2_div1_main_form_h2'>
                                친구들의 사진과 동영상을 보려면 가입하세요.
            </h2> 
            <div className='articleChild2_div1_main_form_div1'>
               <button type="submit" className='articleChild2_div1_main_form_div1_button' onClick="">
                   Facebook으로 로그인
               </button>
           </div>
        </div>
        
        );
    }
}

export default Login;
