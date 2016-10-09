import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    /* When react starts up, it sends a few actions through the reducers with
       action.type that we don't recognize. In that case we set the state to
       null, which means this.props.book will be null.

       To handle that case, we need to return early. Once the user actually
       selects a book (setting the activeBook property) we're good to go. */
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail)
