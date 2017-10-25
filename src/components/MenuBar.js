import React, { Component } from 'react';
import SearchForm from './SearchForm';
import './MenuBar.css';

/**
 * Menu bar with a search form that
 * calls onSearch(value) when search is performed.
 */
class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(value) {
    this.props.onSearch(value);
  }

  render() {
    return (
      <div className="menu-bar">
        <img
          className="logo"
          src="https://www.youtube.com/yt/about/media/images/brand-resources/logos/YouTube-logo-full_color_light.svg"
          alt="logo"
        />
        <SearchForm placeholder="Search videos" onSend={this.handleSend} />
      </div>
    );
  }
}

export default MenuBar;
