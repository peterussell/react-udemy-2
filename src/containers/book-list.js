import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

/* This is a 'container' - which is a kind of promoted Component. A Container
   is simply a React Component that can access Redux state.

   Containers are also sometimes called 'Smart Components', as opposed to standard
   Components, or 'Dumb Components', due to their ability access Redux state.

   >> Container = Smart Component = Component which can acccess Redux state (directly) <<
   >> Component = Dumb Component = Component which can't access Redux state (directly) <<

   Picking a component to be a container: in general, we want the *most parent*
   Component which cares about state to be the container. */

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick = {() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

/* The purpose of mapStateToProps is to take the application state as an argument,
   and whatever is returned from here will show up as props inside of BookList.

   If the state argument ever changes, this Container will automatically re-render
   with the new list of books. */
function mapStateToProps(state) {
  return {
    books: state.books // this is the connection between Redux and our React component
  };
}

/* Anything returned from this function will end up as props on the
   BookList container, which is (realistically?) the first arg to
   bindActionCreators.

   For example, this means we'll have a props on BookList called
   selectBook, specifically because that's the name of the key in
   { selectBook: selectBook }. If we had { someBook: selectBook }
   then we'd end up with a prop on BookList called this.props.someBook. */
function mapDispatchToProps(dispatch) {
  /* Whenever selectBook is called - which returns an action object,
     the result should be passed to all of our reducers - this is what
     bindActionCreators does.

     dispatch() is a function which takes all the actions (created by the
     actionCreators, such as selectBook), and sends them (dispatches them)
     to all the reducers. */
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/* connect() is what turns this Component into a Container. It takes a Component, and a
   mapStateToProps(), and returns a Container. We want to use this Container in the
   rest of our application, which is why we export this function instead of the
   BookList class.

   The Container needs to know about this dispatch method, selectBook. Make it
   available as a prop.

   Note: the course recommends referencing the react-redux documentation for all
   the different ways you can use connect in a real implementation project, to
   cut up the state in different ways. */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
