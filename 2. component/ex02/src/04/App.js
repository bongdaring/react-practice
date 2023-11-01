import React from 'react';
import styles from './assets/css/App.css';
import Banner01 from './assets/css/Banner01';
import Banner02 from './assets/css/Banner02';

function App() {
    return (
        <div id={'App'}>
            <h1 className={'Header'}>CSS Module II</h1>
            <Banner01 />
            <Banner02 />
        </div>
    );
}

export {App};