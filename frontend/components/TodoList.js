import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos, displayCompleteds, toggleCompleted } = this.props;
    return (
      <div id="todos">
        <h2>Todos:</h2>
        {todos.reduce((acc, td) => {
          if (displayCompleteds || !td.completed)
            return acc.concat(<Todo
              toggleCompleted={toggleCompleted}
              todo={td}
              key={td.id}
            />);
          return acc;
        }, [])}
      </div>
    );
  }
}
