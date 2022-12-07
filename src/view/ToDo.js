const ToDo = (props) => {
  //props = properties
  const { todos, title, handleDeleteEvent } = props;
  const handleDeleteEventClick = (id) => {
    handleDeleteEvent(id);
  };
  //parent => child, top => bottom
  return (
    <div className="todos-container">
      <p>{title}</p>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title}
              <span
                onClick={() => {
                  handleDeleteEventClick(todo.id);
                }}
              >
                X
              </span>
            </li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};
export default ToDo;
