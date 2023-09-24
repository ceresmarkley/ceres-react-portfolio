import React from 'react';

const styles = {
    card: {
        marginBottom: 30
    },
    button: {
        marginRight: 5
    }
};

function ProjectCard(props) {
    return (
        <div className="col-sm-6">
                    
                <div className="card text-center" style={styles.card}>

                    <img src={props.image} className="card-img-top" alt={props.title}/>
                    
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <a href={props.deployed} rel="noreferrer" target="_blank" className="btn btn-outline-info btn-sm" style={styles.button}>View Project</a>

                            <a href={props.repo} rel="noreferrer" target="_blank" className="btn btn-outline-info btn-sm">GitHub Repository</a>
                        </div>
                </div>
        </div>
    );
}

export default ProjectCard;