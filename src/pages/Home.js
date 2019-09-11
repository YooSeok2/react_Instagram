import React, {Component} from 'react';
import './App.css';
import Footer from './footer';
import Rightarea from './rightarea';
import Leftarea from './leftarea';



class Home extends Component {
    render(){
        return (
            <span className='mainSpan'>
              <section className='section'>
                  <main>
                    <article className='article'>
                      <Leftarea />
                      <Rightarea/>
                    </article>
                  </main>
                  <footer className="footer">
                      <Footer />
                  </footer>
              </section>
            </span>
          );
    }
  
}

export default Home;
