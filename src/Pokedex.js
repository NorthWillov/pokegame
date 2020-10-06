import React from 'react';
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <h3>Total Exp: {this.props.exp}</h3>
        <h2>{this.props.isWinner ? 'You Win!' : 'You Lose'}</h2>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard 
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex