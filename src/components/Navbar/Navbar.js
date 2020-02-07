import React , {Component} from 'react';
import logo from '../../logo.svg'
import './navbar.scss'

class Navbar extends Component{
    render(){
        return(
            <nav className='navbar'>
                <img src={logo} alt='city tour company'></img>
                <ul className='nav-links'>
                <li ><a className='nav-link' href='/'>Home</a></li>
                <li ><a className='nav-link' href='/'>About</a></li>
                <li ><a className='nav-link active' href='/'>Tours</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar