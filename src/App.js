import React, { Component } from "react";
import { Navigation, Header, Layout, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";
import "./App.css";



class App extends Component {
  render() {
    return (
      <div>
        <div className='demo-big-content'>
          <Layout>
      <Link to="/"  className='header-color' title='Sfayhi Anouar' scroll> 
           <Header title="My Portfolio" >
             
              <Navigation>
                <Link to='/aboutme' className='navbar-header-hrz'>
                  {" "}
                  About me
                </Link>
                <Link to='/contact' className='navbar-header-hrz'>
                  {" "}
                  Contact{" "}
                </Link>
                <Link to='/resume' className='navbar-header-hrz'>
                  {" "}
                  Resume{" "}
                </Link>
                <Link to='/skills' className='navbar-header-hrz'>
                  {" "}
                  Skills{" "}
                </Link>
              
              

              </Navigation>
            </Header></Link>
           
            <Content>
              <div className='page-content' />

              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
