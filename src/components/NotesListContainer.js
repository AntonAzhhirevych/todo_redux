import NotesList from './NotesList';
import { connect } from 'react-redux';
import * as notesOperation from '../redux/notesOperations';

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = {
  fetchNotes: notesOperation.getNotes,
  removeNote: notesOperation.deleteNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesList);
