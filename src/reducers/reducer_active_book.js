/* All reducers get two arguments: the current state, and an action.
   Reducers are only ever called when an action occurs.

   State argument is not application state, only the state this reducer
   is responsible for (remember, each reducer only looks at (creates/receives)
   a *piece* of state, and combineReducers contains these reducer -> state
   part mappings.

   The state argument is the existing state before we make any changes
   (if any). */
export default function(state = null, action) {
  /* Note on 'state = null', (which is ES6) this exists to handle the case where the
     app first starts, where the state is undefined. In that case there's
     no action, so this function would return state (undefined).

     Redux will throw an error if we return undefined state, so in that
     case set the default state to be null instead of undefined. */
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  /* Immutable state: it's really important that we never return a mutated
     version of the existing state, the state we return must always be
     100% new.

     For example: don't do something like
       state.title = book.title;
       return state;
     */
  return state
}
