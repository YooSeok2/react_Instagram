import React  from 'react';
import './App.css';
// import NodeFetch from 'node-fetch';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {  Link } from 'react-router-dom';


// import {Map, List} from 'immutable';



const Register = ({address,name, sign, password, warning, style, to, changepage})=>{
        
        return(
            
            <div>
            <div className="articleChild2_div1_main_form_div2">
                <div className="articleChild2_div1_main_form_div2_div1"></div>
                <div className="articleChild2_div1_main_form_div2_div2">또는</div>
                <div className="articleChild2_div1_main_form_div2_div1"></div>
            </div>
    
            <div className="articleChild2_div1_main_form_div3" >
                 <label className="articleChild2_div1_main_form_div3_label">
                     <span className="articleChild2_div1_main_form_div3_span" ></span>
                    <input className="articleChild2_div1_main_form_div3_input"
                            type="text" onChange={address} placeholder="이메일 주소 및 휴대폰 번호"></input>
                 </label>
             </div>
             <div className="articleChild2_div1_main_form_div3" >
                <label className="articleChild2_div1_main_form_div3_label">
                    <span className="articleChild2_div1_main_form_div3_span" ></span>
                   <input className="articleChild2_div1_main_form_div3_input"
                           type="text" onChange={name} placeholder="성명"></input>
                </label>
             </div>
             <div className="articleChild2_div1_main_form_div3" >
                <label className="articleChild2_div1_main_form_div3_label">
                    <span className="articleChild2_div1_main_form_div3_span" ></span>
                   <input className="articleChild2_div1_main_form_div3_input"
                           type="text" onChange={sign} placeholder="아이디"></input>
                </label>
            </div>
            <div className="articleChild2_div1_main_form_div3" >
                <label className="articleChild2_div1_main_form_div3_label">
                    <span className="articleChild2_div1_main_form_div3_span" ></span>
                   <input className="articleChild2_div1_main_form_div3_input"
                           type="text" onChange={password} placeholder="비밀번호"></input>
                </label>
            </div>
            <div className='articleChild2_div1_main_form_div1'>  
               <button type="submit" className='articleChild2_div1_main_form_div1_button' onClick={changepage}>
                   <Link to={to}>가입</Link>
               </button>
               
           </div>
                <p className={style}>
                    {warning}
                </p>
                <p className="articleChild2_div1_main_form_div4">
                    가입하면 Instagram의 약관, 데이터, 정책 및 쿠키 정책에 동의하게 됩니다.
                </p>
                
            </div>
            
        );
    }
    

    // Register.defaultProps ={
    //     register: List([
          
    //     ]),
    //     style : '',
    //     warning : ''
    // };


export default Register;
