import React, { Component } from 'react';
import css from './AddNotes.module.css';

class AddNote extends Component {
  state = {
    prioryty: 'Normal',
    title: '',
    text: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.AddNote(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      title: '',
      text: '',
    });
  };

  render() {
    const { title, text, type } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <input
          className={css.input}
          name="title"
          onChange={this.handleChange}
          value={title}
          type="text"
          placeholder="value..."
        />
        <input
          className={css.input}
          name="text"
          onChange={this.handleChange}
          value={text}
          type="text"
          placeholder="value..."
        />

        <select className={css.input} onChange={this.handleChange} value={type} name="prioryty">
          <option value="Low">Low</option>
          <option value="Hight">Hight</option>
          <option value="Normal">Normal</option>
        </select>
        <button className={css.button} type="submit">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default AddNote;
