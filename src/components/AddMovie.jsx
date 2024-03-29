import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieInfos from './MovieInfos';
import MovieInfos2 from './MovieInfos2';
import Button from './Button';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    const newMovie = {
      title,
      subtitle,
      storyline,
      imagePath,
      rating: +rating,
      genre,
      bookmarked: false,
    };
    onClick(newMovie);
    this.setState(INITIAL_STATE);
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieInfos
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <MovieInfos2
          rating={ rating }
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <Button
          btnText="Adicionar filme"
          name="sendButton"
          dataTestId="send-button"
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.exact({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default AddMovie;
