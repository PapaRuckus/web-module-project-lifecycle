import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { toggleCompleted, todo} = this.props;
    return (
      <div
        onClick={toggleCompleted(todo.id)}
      >
        {todo.name} {todo.completed ? " ✔️" : ""}
      </div>
    );
  }
}
