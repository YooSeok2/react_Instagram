import React, {Component} from 'react';
import './App.css';
import FooterList from './footerList';



 

class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            text:[                
                {text:"Instagram 정보"},
                {text:"지원"},
                {text:"홍보 센터"},
                {text:"API"},
                {text:"채용 정보"},
                {text:"개인정보처리방침"},
                {text:"약관"},
                {text:"디렉터리"},
                {text:"프로필"},
                {text:"해시태그"},
                {text:"언어"}                                                                                                                                                         
            ]
        };

    }
    
    render(){
        return (
            <div className="footer_div">
                <nav className="footer_div_nav">
                    <ul className="footer_div_nav_ul">
                       {
                          this.state.text.map((item, i)=>{
                              return (<FooterList text={item.text} key={i}/>);
                          })
                       }              
                    </ul>                
                </nav>
                <span className="footer_span">© 2019 Instagram</span>
            </div>
          );
    }
  
}

export default Footer;
