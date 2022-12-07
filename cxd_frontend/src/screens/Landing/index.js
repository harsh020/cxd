import React, { Component } from 'react';

import MenuBar from './MenuBar';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Work from './sections/Work/Work';
import Team from './sections/Team/Team';
import Banner from './sections/Banner/Banner';
import Contact from './sections/Contact/Contact';

class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <Header>
                    <MenuBar />
                </Header>
                <Banner />
                <Work />
                <Team />
                <Contact />
                <Footer />
                
            </React.Fragment>
        );
    }
}

export default Landing;