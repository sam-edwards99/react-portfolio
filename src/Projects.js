import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render() {
        const { title, image ,description, link } = this.props.project;
        return(
            <div style={{ display:'inline-block', backgroundColor: '#FF7F50',   borderRadius: 25, width : 300, margin: 10}}>
                <h3>{title}</h3>
                <img src = {image} alt='profile' style={{width: 200, height: 200}} />
                <p>{description}</p>
                <a href={link}>{link}</a>

            </div>
        )
    }
}


class Projects extends Component{
    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                   {
                       PROJECTS.map(PROJECT => {
                           return ( 
                                <Project key={PROJECT.id} project={PROJECT} />
                           );
                       })
                   }
                </div>
            </div>
        )
    }
}

export default Projects;