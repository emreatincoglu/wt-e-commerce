import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import PageContent from '../layout/PageContent';

function HomePage() {
    return (
        <div>
            <Header />
            <PageContent />
            <Footer />
        </div>
    )
}
export default HomePage;