import React from 'react';
import data from './assets/json/data';
import CardList from './CardList';


function Kanbanboard(props) {

    const cardsToDo = data.filter(card => card.status === 'ToDo');
    const cardsDoing= data.filter(card => card.status === 'Doing');
    const cardsDone = data.filter(card => card.status === 'Done');

    return (
        <div class='KanbanBoard'>
            <CardList cardList={cardsToDo} title={'To Do'}/>
            <CardList cardList={cardsDoing} title={'Doing'}/>
            <CardList cardList={cardsDone} title={'Done'}/>
        </div>
    );
}

export default Kanbanboard;