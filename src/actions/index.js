export function selectBook(book) {
  /* SelectBook is an ActionCreator, it needs to return an action,
     an object with a type: property, and optionally a payload. */
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
