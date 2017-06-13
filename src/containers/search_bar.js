import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = ({input: ''});

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onInputChange(e) {
    this.setState({input: e.target.value})
  }
  onFormSubmit(e) {
    e.preventDefault()

    this.props.fetchWeather(this.state.input)
    this.setState({input: ''});


  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
        placeholder='search here'
        className='form-control'
        value={this.state.input}
        onChange={this.onInputChange}
        />

        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
