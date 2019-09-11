import React, {Component} from 'react';
import './App.css';




class FooterList extends Component {
    render(){
        return (
            
            <li className="li">
                <a href={this.props.href} className="footer_a">{this.props.text}</a>
            </li>
            
          );
    }
  
}

export default FooterList;
