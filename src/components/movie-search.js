import React from 'react';

class MovieSearch extends React.Component{

    constructor(){
        super();
    }
    _handleSearch(e) {
        e.preventDefault();
        this.props.search(this.refs.movieSearch.value);
    }
    render(){
        return(
            <form onSubmit={this._handleSearch.bind(this)}>
                <input type="search" ref="restaurantSearch"placeholder="give me your money"/>
                <input type="submit" value="Search" />
            </form>
        )
    }
}

export default RestaurantSearch;