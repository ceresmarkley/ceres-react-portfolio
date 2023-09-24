import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/markley-logo.png';

const styles = {
    nav: {
        position: "sticky",
        zIndex: 1,
        backgroundColor:"white"
    },
    logo: {
        width: 30,
        height: 30
    },
    links: {
        marginRight: 10
    }
};

function Nav() {
    const location = useLocation();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

    return (
       
        <nav className='navbar fixed-top navbar-expand-lg navbar-light' style={styles.nav}>
        <a
            className='navbar-brand'>
            
            <img
                src={logo}
                alt="CMC"
                loading="lazy"
                style={styles.logo}/>
        </a>
        
        <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
            onClick={handleNavCollapse}>
            
            <span
                className="navbar-toggler-icon" />
        </button>
        
        <div
            className={`${isNavCollapsed ? 'collapse' : ''} justify-content-end navbar-collapse`}
            id="navbarSupportedContent">
            
            <ul className="navbar-nav">
                <li className="nav-item" style={styles.links}>
                        <Link to="/"
                            className={location.pathname === "/" ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                                About
                        </Link>

                </li>
                
                <li className="nav-item" style={styles.links}>
                        <Link to="/Portfolio"
                            className={location.pathname === "/Portfolio" ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                                Portfolio
                        </Link>
                </li>
                
                <li className="nav-item" style={styles.links}>
                        <Link to="/Contact"
                            className={location.pathname === "/Contact" ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                                Contact
                        </Link>
                </li>
                
                <li className="nav-item">
                        <Link to="/Resume"
                            className={location.pathname === "/Resume" ? 'nav-item nav-link active' : 'nav-item nav-link'}>
                                Resume
                        </Link>
                </li>
            </ul>
        </div>    
        </nav>
    
    )
}

export default Nav;