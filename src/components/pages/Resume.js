import React from 'react';
import resume from "../../assets/jh-resume-01.png";


const styles = {
    jumbotron: {
        backgroundColor: "white",
        marginTop: 150,
        marginBottom: 100
    }
};


const Resume = () => (
    <div className="container-sm container-md container-lg container-xl">
        <div className="jumbotron shadow" style={styles.jumbotron}>
            <h1 className="display-4 text-center">
                Resume
            </h1><br />
            
            <p>
                <img
                    className="img-fluid"
                    id="resume"
                    src={resume}
                    alt="Ceres Cook's resume" />
            </p><br />
            
            <p className="lead text-center">
                <a
                    href="https://github.com/ceresmarkley/ceres-react-portfolio/blob/main/src/assets/ceres-resume.pdf"
                    target="_blank">
                    Download resume PDF
                </a>
            </p>
        </div>
    </div>
);

export default Resume;