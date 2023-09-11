import React from "react";

export default class Form extends React.Component {
  render() {
    const {
      onTodoFormSubmit,
      todoNameInput,
      onTodoNameChange,
      toggleDisplayCompleteds,
      displayCompleteds,
    } = this.props;
    return (
      <>
        <form id="todoForm" onSubmit={onTodoFormSubmit}>
          <input
            value={todoNameInput}
            onChange={onTodoNameChange}
            type="text"
            placeholder="Type Todo"
          ></input>
          <input type="submit"></input>
        </form>
        <button onClick={toggleDisplayCompleteds}>
          {displayCompleteds ? "Hide" : "Show"} Completed
        </button>
      </>
    );
  }
}
