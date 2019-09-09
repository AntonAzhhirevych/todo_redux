import axios from 'axios';
import { getNotesStart, getNotesSuccess, getNotesError } from './notesAction';

import { deleteNoteStart, deleteNoteSuccess, deleteNoteError } from './notesAction';
import { addNoteStart, addNoteSuccess, addNoteError } from './notesAction';

export const getNotes = () => dispatch => {
  dispatch(getNotesStart());

  axios
    .get('http://localhost:3000/posts')
    .then(posts => dispatch(getNotesSuccess(posts)))
    .catch(error => dispatch(getNotesError(error)));
};

export const deleteNote = id => dispatch => {
  dispatch(deleteNoteStart());

  axios
    .delete(`http://localhost:3000/posts/${id}`)
    .then(() => dispatch(deleteNoteSuccess(id)))
    .catch(error => dispatch(deleteNoteError(error)));
};

export const addNote = note => dispatch => {
  dispatch(addNoteStart());
  console.log(note);

  axios
    .post('http://localhost:3000/posts', note)
    .then(() => dispatch(getNotes()))
    .catch(error => dispatch(addNoteError(error)));
};
