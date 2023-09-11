import React from 'react'

export default class TodoList extends React.Component {
  render() {
    const { todos, displayCompleteds, toggleCompleted } = this.props;
    return (
      <div id="todos">
        <h2>Todos:</h2>
        {todos.reduce((acc, td) => {
          if (displayCompleteds || !td.completed)
            return acc.concat(
              <div onClick={toggleCompleted(td.id)} key={td.id}>
                {td.name} {td.completed ? " ✔️" : ""}
              </div>
            );
          return acc;
        }, [])}
      </div>
    );
  }
}
