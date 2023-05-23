import {useContext, useState} from "react";
import logo from "../../assets/logo-blue-white.png";
import "./Header.css";
import { Link } from "react-router-dom";
import {LoginAuth} from '../../contexts/LoginAuth'


const Header = () => {
const {isLogin} = useContext(LoginAuth);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    };

   
  return (
    <header>
      <nav>
        <div className="logo-container">
            <Link to={'/'}> <img src={logo} alt="logo" /></Link>
         
        </div>
       
        <div className="nav-links">
          <svg onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="links-logo"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
            <ul className={isMenuOpen ? 'menu active' : 'menu'}>
                <li>
                    <Link to={'/'}>Anasayfa</Link>
                </li>
                <li>
                    <Link to={'/about'}>Hakkımızda</Link>
                </li>
                <li>
                    <Link to={'/contact'}>İletişim</Link>
                </li>
                <li>
                    <Link to={isLogin ?'/account' : '/login'}>Hesabım</Link>
                </li>
            </ul>

         <Link className="links-logo" to={isLogin ? '/account' :'/login'}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="links-logo"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
         </Link>
        
        </div>
      </nav>
    </header>
  );
};

export default Header;
