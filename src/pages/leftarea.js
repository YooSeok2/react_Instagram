import React, { Component } from 'react';
import './App.css';

class leftarea extends Component{
    render(){
        return(
            <div className="articleChild1">
                    <div className="articleChild1_div">
                        <img className="articleChild1_div_img" src="./images/screenshot1.jpg" alt=""/>
                        <img className="articleChild1_div_img" src="./images/screenshot2.jpg" alt=""/>
                        <img className="articleChild1_div_img"
                           src="./images/screenshot3.jpg" alt=""/>
                         <img className="articleChild1_div_img"
                                    src="./images/screenshot4.jpg" alt=""/>
                        <img className="articleChild1_div_img"
                                    src="./images/screenshot5.jpg" alt=""/>
                    </div>
            </div>
        );
    }
}

export default leftarea;
