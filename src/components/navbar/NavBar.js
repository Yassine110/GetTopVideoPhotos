import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import '../../App.css';

const Navbar = () => <AppBar title="Get Top Images and Videos"  style={{ backgroundColor:'green' }} > 
      <ul className="nav">
          <Link to="/"><li>Images</li></Link> 
          <Link to="/videos"><li>Videos</li></Link>
      </ul>
</AppBar>

export default Navbar;