// import { getPosts } from './notesOperations';
import types from './notesTypes';

const notesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_NOTES_SUCCESS:
      return payload;
    case types.DELETE_NOTE_SUCCESS:
      return state.filter(note => note.id !== payload);
    case types.ADD_NOTE_SUCCESS:
      return [...state, payload];

    default:
      return state;
  }
};

export default notesReducer;
