import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Todo.module.css";

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {
    const handleRemove = (id) => {
        removeTodo(id);
        toast.success("Tarefa excluída com sucesso!", {
            position: "top-right",
            hideProgressBar: false,
            theme: "light",
            closeButton: false,
            closeOnClick: true,
        });
    };

    const handleEdit = (todo) => {
        editTodo(todo);
    };

    return (
        <AnimatePresence>
            <motion.div
                className={style.todo}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "relative",
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                    backgroundColor: todo.isCompleted ? "#d4edda" : "#fff",
                    borderLeft: todo.isCompleted ? "5px solid #28a745" : "5px solid transparent",
                    padding: "15px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                }}
            >
                {!todo.isCompleted && (
                    <motion.button
                        onClick={() => handleEdit(todo)}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ backgroundColor: "#007bff", color: "#fff" }}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: "#007bff",
                        }}
                    >
                        <FaEdit size={18} />
                    </motion.button>
                )}

                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <h3>Título: {todo.title}</h3>
                    <p>Descrição: {todo.description}</p>
                </div>

                {!todo.isCompleted && (
                    <motion.div
                        style={{ display: "flex", gap: "10px" }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: todo.isCompleted ? 0 : 1 }}
                        exit={{ opacity: 0, scale: 0.5, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.button
                            onClick={() => completeTodo(todo.id)}
                            className={style.complete}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                padding: "8px 15px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: "#28a745",
                                color: "#fff",
                                transition: "background 0.3s",
                            }}
                        >
                            Concluir
                        </motion.button>
                        <motion.button
                            onClick={() => handleRemove(todo.id)}
                            className={style.remove}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ backgroundColor: "#dc3545", color: "#fff" }}
                            style={{
                                padding: "8px 15px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                transition: "background 0.3s",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                            }}
                        >
                            <FaTrash /> Remover
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

Todo.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func,
};

export default Todo;
