import { connect } from 'react-redux';
import AddNotes from './AddNotes';
import * as notesOperation from '../redux/notesOperations';

const mapDispatchToProps = {
  AddNote: notesOperation.addNote,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddNotes);
