import React, {useState} from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';

const TaskList = ({tasks, addTask, changeTaskDone}) => {

    //여기서 delete?
    
    return (
        <div>
            <ul>
                {
                    tasks.map(task => <Task
                                        key={task.no}
                                        no={task.no}                                        
                                        name={task.name}
                                        done={task.done}
                                        changeTaskDone={changeTaskDone} />)
                }
            </ul>
            <input
                type='text'
                placeholder={'태스크 추가'}
                className={styles.TaskList__add_task}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        addTask(e.target.value);
                        e.target.value = '';
                    }
                }}/>
        </div>
    );
};

export default TaskList;