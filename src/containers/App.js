import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';

import { setSearchField } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearch: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render(){
    const { robots } = this.state
    const { searchField, onSearch } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ?
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends Reactivate!</h1>
          <Searchbox searchChange={onSearch}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
