import React, { Component } from 'react';
import './App.css';

import Login from './Login';
// import Register from './Register';
import RegisterContainer from '../containers/RegisterContainer';


class rightarea extends Component{
    

    
    render(){
       
        return(
            <div className='articleChild2'>
                <div className='articleChild2_div1'>
                    <h1 className='articleChild2_div1_h1'>Instagram</h1>
                    <div className='articleChild2_div1_main'>
                        <form className='articleChild2_div1_main_form'>
                            <Login />
                            <RegisterContainer />
                        </form>
                    </div>
                </div>
                <div class="articleChild2_div2">
                    <p>계정이 있으신가요?<a href="https://www.instagram.com/?hl=ko" className="login">로그인</a></p>
                </div>

                <div class="articleChild2_div3">
                    <p class="articleChild2_div3_p">앱을 다운로드하세요.</p>
                    <div class="articleChild2_div3_div">
                        <a class="articleChild2_div3_a" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.signupPage.badge&amp;mt=8&amp;vt=lo">
                         <img alt="App Store에서 이용 가능" class="articleChild2_div3_image" 
                            src='images/abbstore.png'/>
                        </a>
                        <a class="articleChild2_div3_a" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DXSKoXQALAAEbOF3C2GKkmZ4dzCEk%26utm_content%3Dlo%26utm_medium%3Dbadge">
                        <img alt="Google Play에서 이용 가능" class="articleChild2_div3_image" 
                            src="images/gogleplay.png"/>
                        </a>
                    </div>
                 </div>
                
            </div>
        );
    }
}

export default rightarea;
