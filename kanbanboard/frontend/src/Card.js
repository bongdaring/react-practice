import React from 'react';
import TaskList from './TaskList';

function Card(props) {
    return (
        <div class='Card'>
            <div class='Card__Title'>{props.title}</div>
            <div class='Card__Details'>
                {props.description}

                <TaskList tasklist={props.tasks} />


            </div>
        </div>
    );
}

export default Card;