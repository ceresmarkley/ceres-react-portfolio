import React from 'react';
import headshot from '../../assets/selfie.png'

const styles = {
    jumbotron: {
        backgroundColor:"white",
        marginTop:100,
        marginBottom:100
    },
    headshot: {
        maxWidth:"50%",
        maxHeight:"auto",
        minWidth:325,
        paddingRight:25,
        paddingBottom:15
    }
}

const About = () => (
    <div className="container">
        <div className="jumbotron shadow" style={styles.jumbotron}>
            <h1 className="display-4 text-center">
                About Me
            </h1><br />
            
            <div className="row">
                <div className="col">
                    <img
                        className="img-fluid float-sm-left float-md-left float-lg-left float-xl-left"
                        style={styles.headshot}
                        src={headshot}
                        alt="Ceres Cook" />
                    
                    <h5 className="mb-5 text-center">
                        What's up! I'm Ceres Cook, welcome to my portfolio!
                    </h5>

                    <p>
                        I am an Operations Management Leader and full-stack web Developer currently living in Richmond, VA.
                    </p>

                    <p>
                        I am a dedicated and self-starting individual who cares about others and works well across multiple teams and networks. I love learning, challenging what I know, and problem solving.
                    </p>

                    <p className='mb-5'> As I have grown as a web developer I have rekindle my passion for design and enhancing user experiences. I am excited to continue to grow and learn as a developer and designer. </p>

                    <p>In my free time, I enjoy gaming, watching great cinema, listening to punk and hip-hop and most importantly puppies! 🐶

                    </p>

                    <p>
                        Feel free to check out some of the projects I've been working on and contact me if you're interested in working together!
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default About;