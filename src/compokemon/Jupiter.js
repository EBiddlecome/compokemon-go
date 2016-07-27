import React from 'react';
import compokemon from '../Compokemon';
import './Jupiter.css';
import jupiter from '../images/jupiter.jpg';

class Jupiter extends React.Component {
  render() {
    return (
      <div className="Jupiter">
        Hello world
        <img src={jupiter} width="130" />
      </div>
    );
  }
}

export default compokemon(Jupiter, {maxHp: 400, type: 'Psychic'});