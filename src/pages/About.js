import React from 'react';
import './App.css';
// import { link } from 'fs';
import {  Link } from 'react-router-dom';





const About =({address, sign, name, password}) =>{
 
        return(
        <div className="aboutMain">
        <div className="articleChild2_div1">    
        <div className="articleChild2_div1_main">
            <form className="articleChild2_div1_main_form">
            <div className="articleChild2_div1_main_form_div3" >
                 <label className="articleChild2_div1_main_form_div3_label" >
                     {address}
                 </label>
             </div>
             <div className="articleChild2_div1_main_form_div3" >
                <label className="articleChild2_div1_main_form_div3_label" >
                    {sign}
                 </label>
             </div>
             <div className="articleChild2_div1_main_form_div3" >
                <label className="articleChild2_div1_main_form_div3_label" >
                   {name}
                </label>      
            </div>
            <div className="articleChild2_div1_main_form_div3" >
                <label className="articleChild2_div1_main_form_div3_label" >
                    {password}
                </label>
            </div>
            <div className='articleChild2_div1_main_form_div1'>
            <button type="button" className='articleChild2_div1_main_form_div1_button' >
                <Link to='/'>뒤로가기</Link>
            </button>
            </div>
        </form>
        </div>
        </div>
        </div>
    );
    
}

export default About;