import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        title="Delete Todo"
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        title="Complete Todo"
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
