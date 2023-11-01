import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

function Emaillist(props) {
    return (
        <ul className={{emails}}>
            {
                emails.map((email) => <Email firstName={email.firstName} lastName={email.lastName} email={email.email} />)
            }
            
    </ul>
    );
}

export default Emaillist;