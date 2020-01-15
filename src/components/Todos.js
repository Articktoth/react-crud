import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment/locale/es';

class Todos extends Component {

    url = Global.url;

    state = {
        todos: [],
        status: null
    };

    componentWillMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get(this.url + 'get-all-todo')
            .then(res => {
                this.setState({
                    todos: res.data.todos
                });
            });
    }

    getTodo = () => {
        let id = this.state.todos._id;

        axios.get(this.url + 'todo/' + id)
            .then(res => {
                this.setState({
                    todo: res.data.article,
                    status: 'success'
                });
            })
            .catch(err => {
                this.setState({
                    todo: false,
                    status: 'success'
                });
            });

    }

    render() {
        if (this.state.todos.length >= 1) {
            let listTodos = this.state.todos.map((todo) => {
                return (
                    <div className="todos" key={todo._id}>
                        {
                            <div className="todo">
                                <h2 className="todo-name">{todo.name}</h2>
                                <p className="todo-description">{todo.description}</p>
                                <Moment locale="es" fromNow className="date">
                                    {todo.date}
                                </Moment>
                                <div className="icons">
                                    <Link to={'/edit/' + todo._id}>
                                        <FontAwesomeIcon className="icon icon-edit" icon={faEdit} />
                                    </Link>
                                    <Link to={'/delete/' + todo._id}> <FontAwesomeIcon className="icon icon-trash" icon={faTrash} /> </Link>
                                </div>
                            </div>
                        }

                    </div>
                );
            })

            return (
                <div>{listTodos}</div>
            );

        } else if (this.state.todos.length === 0 && this.state.status === null) {
            return (
                <div className="no-list">
                    <h2>No hay tareas para mostrar</h2>
                </div>
            );
        }else {
            return (
                <h2>Cargando...</h2>
            );
        }
    }
}

export default Todos;