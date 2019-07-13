import React from 'react';
import SiteHeader from '../site-header/site-header';
import SiteContent from './site-content/site-content';

class Main extends React.Component {
    render() {
        return (
            <div className="page">
                <SiteHeader />
                <SiteContent />
            </div>
        );
    }
}

export default Main;