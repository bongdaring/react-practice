import React from 'react';
import Header from './Header';
import Card from './Card';

function CardList({cardList, title}) {
    return ( 
        <div class='CardList'>
            <Header name={title} />
            {
                cardList.map((card) => <Card card={card} key={card.no}/>)
            }
        </div>
    );
}

export default CardList;