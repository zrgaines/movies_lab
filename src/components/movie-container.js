import React from 'react';

import 'whatwg-fetch';
import MovieSearch from './movie-search';
import MovieList from './movie-list';


class MovieContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {movies: []};

  }


 componentWillMount(){
  this._fetchMovies();
}



_fetchMovies(searchTerm) {
    var str = "?$limit=5";

    if (searchTerm) {
      str += `&$where=starts_with(restaurant_name, '${searchTerm}')`;
    }

    fetch(`//data.austintexas.gov/resource/nguv-n54k.json${str}`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        this.setState({
          restaurants: results
        })
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }

  render(){
    return (
      <div>
        <RestaurantSearch search={this._fetchRestaurants.bind(this)}/>
        <RestaurantList restaurants={this.state.restaurants}/>
      </div>
      );
  }
}

export default MovieContainer;