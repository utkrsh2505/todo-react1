const TodoItem = ({ id, status, title }) => {
  return (
    <div className="card">
      <span>{`${id}-${title}--${status}`}</span>
    </div>
  );
};
export default TodoItem;
