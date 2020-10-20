import React, { Component } from 'react';
import SOCIALS from './data/socialProfiles';

class Social extends Component{
    render() {
        const { image , link } = this.props.social;
        return(
            <span>
                <a href={link}><img src = {image} alt='profile' style={{width: 35, height: 35, margin: 10}} /></a>
            </span>
        )
    }
}


class Socials extends Component{
    render() {
        return (
            <div>
                <div>
                   {
                       SOCIALS.map(SOCIAL => {
                           return ( 
                                <Social key={SOCIAL.id} social={SOCIAL} />
                           );
                       })
                   }
                </div>
            </div>
        )
    }
}

export default Socials;