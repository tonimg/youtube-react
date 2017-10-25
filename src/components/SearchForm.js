import React, { Component } from 'react';
import './SearchForm.css';

/**
 * Form with an <input> and a <button> that
 * calls onSend(inputValue) when clicked
 */
class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSend(this.state.inputValue);
  }

  handleOnChangeInput(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input value={this.state.inputValue} placeholder={this.props.placeholder} onChange={this.handleOnChangeInput} />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchForm;
