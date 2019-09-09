import React, { Component } from 'react';
import AddNotesContainer from './AddNotesContainer';
import css from './NoteList.module.css';

class NotesList extends Component {
  state = {};

  componentDidMount(prevProps, prevState) {
    this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;
    const { removeNote } = this.props;

    return (
      <div>
        <AddNotesContainer />
        <ul className={css.container}>
          {notes.map(note => (
            <li className={css.card} key={note.id}>
              <div className={`${css.color} ${css[`${note.prioryty}`]}`} />

              <p>{note.title}</p>
              <p>{note.text}</p>
              <button className={css.button} onClick={() => removeNote(note.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NotesList;
