import React from 'react';
import SiteHeader from '../../global/header/site-header';
import PageContent from './page-content/page-content';

class Results extends React.Component {
    render() {
        return (
            <div className="page">
                <SiteHeader />
                <PageContent />
            </div>
        );
    }
}

export default Results;
