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
            <Header className='header-color' title='My Portfolio' scroll>
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
                <Link to='/projects' className='navbar-header-hrz'>
                  {" "}
                  Projects{" "}
                </Link>
              </Navigation>
            </Header>
            <Drawer title='My Portfolio' className='header-color-vrt'>
              <Navigation>
                <Link to='/aboutme' className='navbar-header-vrt'>
                  {" "}
                  About me
                </Link>
                <Link to='/contact' className='navbar-header-vrt'>
                  {" "}
                  Contact{" "}
                </Link>
                <Link to='/resume' className='navbar-header-vrt'>
                  {" "}
                  Resume{" "}
                </Link>
                <Link to='/projects' className='navbar-header-vrt'>
                  {" "}
                  Projects{" "}
                </Link>
              </Navigation>
            </Drawer>
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
