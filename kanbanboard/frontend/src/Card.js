import React from 'react';
import TaskList from './TaskList';

function Card({card}) {
    return (
        <div class='Card'>
            <div class='Card__Title'>{card.title}</div>
            <div class='Card__Details'>
                {card.description}

                <TaskList tasklist={card.tasks} />


            </div>
        </div>
    );
}

export default Card;