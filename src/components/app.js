/* Note on imports: if we import a word (no curly-braces) then it imports the entire
   object from that file, but if we use curly-braces we import just a single property. */
import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
