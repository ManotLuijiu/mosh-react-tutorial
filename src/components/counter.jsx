import React, { Component, Fragment } from 'react';
import './counter.css';

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <Fragment>
        {this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()}
      </Fragment>
    );
  }
}

export default Counter;
