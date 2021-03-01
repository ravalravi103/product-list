import React from 'react'
import NavbarItem from '../NavbarItem/NavbarItem';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import CategoryIcon from '@material-ui/icons/Category';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import  './Navbar.css'

function Navbar() {
    return (
        <div className="header">
              <Link to="/" className="nav-link"><NavbarItem Icon={LocalMallIcon} title="AllProducts"/></Link>
             <div className="navbar">
             <Link to="/addProduct" className="nav-link"><NavbarItem Icon={AddIcon} title="AddProduct"/></Link>
             <Link to="addCategory" className="nav-link"><NavbarItem Icon={CategoryIcon} title="AddCategory"/></Link>
             </div>
        </div>
    )
}

export default Navbar
