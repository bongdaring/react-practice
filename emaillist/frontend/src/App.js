import React from 'react';

function App() {
    const h1Stye = {
        height: '100px',
        padding: 20,
        color: '#111',
        backgroundColor: '#eeff99'
    };
    return (
        <div id={'App'}>
            <h1 style={{h1Stye}}>inline styling</h1>
        </div>
    );
}

export {App};