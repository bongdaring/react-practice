import React from 'react';

function Task(props) {
    return (
        <li class='TaskList__Task'>
        <input type='checkbox' checked='true' />
        {props.name}
        <a href='#' class='TaskList__Task--remove'></a>
        </li>
    );
}

export default Task;