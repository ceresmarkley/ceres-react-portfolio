import React, {Component} from 'react';
import ProjectCard from '../ProjectCard';
import projects from '../projects.json';




const styles = {
    jumbotron: {
        backgroundColor:"white",
        marginTop:100,
        marginBottom:100
    }
}

class Portfolio extends Component {
    state = {
        projects
    };

    render() {
        return (
            <div className="container-sm container-md container-lg container-xl">
        <div className="jumbotron shadow" style={styles.jumbotron}>
            <h1 className="display-4 text-center">
                Portfolio
            </h1><br/>

            <div className="row">
                <div className="col">
                            <div className="row">
                                {this.state.projects.map(project => (
                                    <ProjectCard
                                        id={project.id}
                                        title={project.title}
                                        image={process.env.PUBLIC_URL + project.image}
                                        repo={project.repo}
                                        deployed={project.deployed} />
                                    
                                ))}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}


export default Portfolio;