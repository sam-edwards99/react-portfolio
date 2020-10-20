import React, { Component } from 'react';
import Projects from './Projects';
import Socials from './SocialProfiles';


class App extends Component{
    constructor(){
        super();
        this.state = { displayBio: false };
        
        this.toggleBio = this.toggleBio.bind(this);
    
    }

    toggleBio(){
        this.setState({ displayBio : !this.state.displayBio });
    }

    render(){
        let bio = this.state.displayBio ? (
        <div>
            <p>I live in Baltimore.</p>
            <p>I go to UMBC.</p>
            <button onClick ={this.toggleBio}>Read Less</button>
        </div>
        ): (
            <div>
                <button style={{color:"white", backgroundColor: "coral"}} onClick ={this.toggleBio}>Read More</button>
            </div>
        );

        return (
            <div>
                <h1>Hello There</h1>
                <p>I am Sam</p>
                {bio}
                <hr />
                <Projects />
                <hr />
                <Socials />
            </div>
        )
    }
}




export default App;