import { Component } from 'react';
import Card from '../cards/card.component';

import './card-list.style.css'

class CardList extends Component {
    render() {
        // console.log('render from card-list');
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    return (
                        <Card monster={monster} />
                    )
                })}
            </div>
        )
    }
}

export default CardList;