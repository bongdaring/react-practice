import React from 'react';

function Task({task}) {
    return (
        <li class='TaskList__Task'>
            <input type='checkbox' checked='true' />
                {task.name}
            <a href='#' class='TaskList__Task--remove'></a>
        </li>
    );
}

export default Task;