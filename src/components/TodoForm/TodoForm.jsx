/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaTimesCircle } from "react-icons/fa";
import style from "./TodoForm.module.css";

const TodoForm = ({ addTodo, updateTodo, isModalOpen, isEditMode, currentTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState({ title: false, description: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        let isError = false;

        if (!title.trim()) {
            setError((prev) => ({ ...prev, title: true }));
            isError = true;
        }
        if (!description.trim()) {
            setError((prev) => ({ ...prev, description: true }));
            isError = true;
        }

        if (isError) return;

        if (isEditMode) {
            updateTodo(currentTodo.id, title, description);
        } else {
            addTodo(title, description);
        }

        resetState();
    };

    const handleChange = (setter, field) => (e) => {
        setter(e.target.value);
        setError((prev) => ({ ...prev, [field]: false }));
    };

    const resetState = () => {
        setTitle("");
        setDescription("");
        setError({ title: false, description: false });
    };

    useEffect(() => {
        if (isEditMode && currentTodo) {
            setTitle(currentTodo.title);
            setDescription(currentTodo.description);
        } else {
            resetState();
        }
    }, [isEditMode, currentTodo]);

    return (
        <div className={style.todo_form}>
            <h2>{isEditMode ? "Editar Tarefa" : "Criar Tarefa"}</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        value={title}
                        placeholder="Digite o título"
                        onChange={handleChange(setTitle, "title")}
                        style={{
                            width: "100%",
                            borderColor: error.title ? "red" : "#ccc",
                            borderWidth: error.title ? "2px" : "1px",
                            padding: "8px",
                            borderRadius: "4px",
                        }}
                    />
                    {error.title && (
                        <div
                            style={{
                                color: "red",
                                fontSize: "14px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <FaTimesCircle style={{ marginRight: "4px" }} />
                            <span>Título obrigatório</span>
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        value={description}
                        placeholder="Adicione a descrição"
                        onChange={handleChange(setDescription, "description")}
                        style={{
                            width: "100%",
                            borderColor: error.description ? "red" : "#ccc",
                            borderWidth: error.description ? "2px" : "1px",
                            padding: "8px",
                            borderRadius: "4px",
                        }}
                    />
                    {error.description && (
                        <div
                            style={{
                                color: "red",
                                fontSize: "14px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <FaTimesCircle style={{ marginRight: "4px" }} />
                            <span>Descrição obrigatória</span>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: "none",
                        backgroundColor: isEditMode ? "#007bff" : "#28a745",
                        color: "#fff",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    {isEditMode ? "Salvar alterações" : "Criar tarefa"}
                </button>
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func,
    isModalOpen: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool,
    currentTodo: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        isCompleted: PropTypes.bool,
    }),
};

export default TodoForm;
