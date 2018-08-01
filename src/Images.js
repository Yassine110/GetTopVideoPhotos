import React, { Component } from 'react';
import Navbar from './components/navbar/NavBar';
import Search from './components/search/Search';
import { MuiThemeProvider } from 'material-ui/styles';
import './App.css';

class Images extends Component {
 render() {
   return(
     <MuiThemeProvider>
       <div>
         <Navbar />
         <div className='container'>
            <h1>Top Images</h1>
            <Search/>
         </div>
         <br/><br/><br/><br/>
     </div>
     </MuiThemeProvider>
   )
 }
}

export default Images;
