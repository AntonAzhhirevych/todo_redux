import types from './notesTypes';

export const getNotesStart = () => ({
  type: types.GET_NOTES_START,
});

export const getNotesSuccess = posts => ({
  type: types.GET_NOTES_SUCCESS,
  payload: posts.data,
});

export const getNotesError = error => ({
  type: types.GET_NOTES_ERROR,
  payload: error,
});

//

export const deleteNoteStart = () => ({
  type: types.DELETE_NOTE_START,
});

export const deleteNoteSuccess = id => ({
  type: types.DELETE_NOTE_SUCCESS,
  payload: id,
});

export const deleteNoteError = error => ({
  type: types.DELETE_NOTE_ERROR,
  payload: error,
});

//

export const addNoteStart = () => ({
  type: types.ADD_NOTE_START,
});

export const addNoteSuccess = note => ({
  type: types.ADD_NOTE_SUCCESS,
  payload: note,
});

export const addNoteError = error => ({
  type: types.ADD_NOTE_ERROR,
  payload: error,
});
