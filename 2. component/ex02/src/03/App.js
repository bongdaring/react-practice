import React from 'react';
import styles from './assets/css/App.css';

function App() {
    console.log(styles);

    return (
        <div id={'App'}>
            <h1 className={styles.Header}>Normal CSS</h1>
        </div>
    );
}

export {App};