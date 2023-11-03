import React from 'react';
import Task from './Task';

function TaskList({tasklist}) {
    
    return (
        <div class='TaskList'>


            {
                tasklist && tasklist.map((task) => <Task task={task} key={task.no}/>)
            }
            

        </div>
    );
}

export default TaskList;