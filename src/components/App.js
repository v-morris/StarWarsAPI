import React from 'react';
import { connect } from 'react-redux';
import { getCharacter, characterRequestComplete, getPlanets, planetRequestComplete, getFilms, filmRequestComplete } from '../actions/index';
import ShowPeople from './ShowPeople/ShowPeople';
import ShowPlanets from './ShowPlanets/ShowPlanets';
import ShowFilms from './ShowFilms/ShowFilms';


class App extends React.Component {
  componentDidMount() {
    this.props.onGetCharacters()
    this.props.onGetPlanets()
    this.props.onGetFilms()
  }

  render() {
    return (
      <div>

        <ShowPeople
          characters={this.props.characters}
        />
        <ShowPlanets
          planets={this.props.planets}
        />

        <ShowFilms
          films={this.props.films}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch, state) {
  return {
    onGetCharacters: () => getCharacter().then(characters => dispatch(characterRequestComplete(characters))),
    onGetPlanets: () => getPlanets().then(planets => dispatch(planetRequestComplete(planets))),
    onGetFilms: () => getFilms().then(films => dispatch(filmRequestComplete(films)))
  };
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
    planets: state.planets,
    films: state.films
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);