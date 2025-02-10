import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import logo from "./assets/logo-propig.svg";
import Modal from "react-modal";
import Footer from "./components/Footer/Footer";
import { toast } from "react-toastify";

const modalStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        width: "40%",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transform: "translate(-50%, -50%)",
    },
};

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos
            ? JSON.parse(savedTodos)
            : [
                  {
                      id: 1,
                      title: "Cadastrar o currículo na Gupy",
                      description: "Cadastro do currículo na plataforma Gupy",
                      isCompleted: true,
                  },
                  {
                      id: 2,
                      title: "Bate-papo com o time de Seleção",
                      description: "Bate papo com o time de seleção para conhecer a empresa/vaga",
                      isCompleted: true,
                  },
                  {
                      id: 3,
                      title: "Bate-papo com o gestor",
                      description: "Bate papo com o gestor da vaga",
                      isCompleted: true,
                  },
                  {
                      id: 4,
                      title: "Case Técnico",
                      description: "Realizar um case técnico",
                      isCompleted: true,
                  },
                  {
                      id: 5,
                      title: "Apresentação do case técnico",
                      description: "Apresentação do case técnico para o time",
                      isCompleted: false,
                  },
                  {
                      id: 6,
                      title: "Feedback",
                      description: "Feedback do case técnico",
                      isCompleted: false,
                  },
              ];
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    Modal.setAppElement("#root");

    const addTodo = (title, description) => {
        const newTodos = [
            ...todos,
            { id: Math.floor(Math.random() * 1000), title, description, isCompleted: false },
        ];
        setTodos(newTodos);
        toast.success("Tarefa criada com sucesso!", {
            position: "top-right",
            hideProgressBar: false,
            theme: "light",
            closeButton: false,
            closeOnClick: true,
        });
        setIsModalOpen(false);
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const completeTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };

    const openCreateTaskModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="app">
            <div className="header">
                <img src={logo} alt="Ícone do sistema" className="logo" />
                <h1>Sistema de Tarefas</h1>
            </div>
            <div className="todo__list_header">
                <Search search={search} setSearch={setSearch} />
                <Filter filter={filter} setFilter={setFilter} />
                <button className="create__task_btn" onClick={openCreateTaskModal}>
                    Criar tarefa
                </button>
            </div>
            <hr />
            <div className="todo-list">
                <AnimatePresence>
                    {todos
                        .filter((todo) =>
                            filter === "All"
                                ? true
                                : filter === "Completed"
                                ? todo.isCompleted
                                : !todo.isCompleted
                        )
                        .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
                        .map((todo) => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                removeTodo={removeTodo}
                                completeTodo={completeTodo}
                            />
                        ))
                        .sort((a, b) => {
                            if (a.isCompleted > b.isCompleted) {
                                return 1;
                            } else {
                                return -1;
                            }
                        })}
                </AnimatePresence>
            </div>
            <Modal
                style={modalStyles}
                contentLabel="Criar Tarefa"
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                shouldCloseOnOverlayClick
                shouldCloseOnEsc
            >
                <TodoForm addTodo={addTodo} isModalOpen={isModalOpen} />
            </Modal>
            <Footer />
        </div>
    );
}

export default App;
