import React from 'react';
import logo from '../assets/jh-logo.png';
import linkedin from '../assets/linkedin-01.png';
import github from '../assets/github-01.png';

const styles = {
    footer: {
        backgroundColor:"white",
        flexShrink:"none"
    },
    logo: {
        height: 75,
        width: 75
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 5
    }
}

const Footer = () => (
    <footer
        id="sticky-footer"
        className="py-4 bg-light text-black-50"
        style={styles.footer}>
        
        <div className="container text-center justify-content-center">
            <img
                src={logo}
                alt="jh"
                loading="lazy"
                style={styles.logo} />
            
            <br /><br />
            
            
            <a
                href="https://www.linkedin.com/in/ceres-cook-432989176/"
                rel="noreferrer"
                target="_blank">
                
                <img
                    src={linkedin}
                    alt="linkedin"
                    style={styles.icon} />
            </a>

            <a
                href="https://github.com/ceresmarkley"
                rel="noreferrer"
                target="_blank">
                
                <img
                    src={github}
                    alt="github"
                    style={styles.icon} />
            </a>

            <br />

            <small>
                Copyright &copy; Ceres Cook
            </small>

        </div>
    </footer>
    
        
);

export default Footer;