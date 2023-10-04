import React from 'react';

const styles = {
    jumbotron: {
        backgroundColor:"white",
        marginTop:100,
        marginBottom:100
    },
    icon: {
        height: 20,
        marginRight: 5
    },
    lines: {
        height: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
}


const Contact = () => (
    <div className="container-sm container-md container-lg container-xl">
        <div className="jumbotron shadow" style={styles.jumbotron}>
            
            <h1 className="display-4 text-center">
                I love to collab! Let's work together!
            </h1><br/>

            <h2 className='text-center'> If you are in need of; </h2><br/>
            <ul className="list-group">
                <p className="lead text-center"> 🌎 A full-stack web developer.. </p>
                <p className="lead text-center"> 🚀 having a website or application built.. </p>
                <p className="lead text-center"> 💪🏻 a team and project leader.. </p>
                <p className="lead text-center"> 🗣️ OR just want to chat about code.. </p>
            </ul>
            <h5 className='text-center'>Please reach out to me via email or LinkedIn!</h5>
            <br/>
            
            
            
            <h5 className="text-center">
                 
                <a className="text-center"
                    href="mailto:ceres.markley@gmail.com"
                    rel="noreferrer"
                    target="_blank">
                    <img src="https://img.icons8.com/fluent/48/000000/gmail.png" alt="Gmail" style={styles.icon}/>
                    ceres.markley@gmail.com  
                </a>
                <br/>
                <br/>
                <a className="text-center"
                    href="https://www.linkedin.com/in/ceres-cook-432989176/"
                    rel="noreferrer"
                    target="_blank">
                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" style={styles.icon}/>
                    LinkedIn
                </a>
                
            </h5>

        </div>
    </div>
)

export default Contact;