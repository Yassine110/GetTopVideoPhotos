import React, { Component } from 'react';
import Navbar from './components/navbar/NavBar';
import { MuiThemeProvider } from 'material-ui/styles';
import SearchVideo from './components/search/SearchVideo';
import './App.css';

class Videos extends Component {
 render() {
   return(
     <MuiThemeProvider>
       <div>
         <Navbar />
         <div className='container'>
         <h1>Top Videos</h1>
         <SearchVideo/>
         </div>   
         <br/><br/> <br/><br/>
     </div>
     </MuiThemeProvider>
   )
 }
}

export default Videos;