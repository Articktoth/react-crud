import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Redirect } from 'react-router-dom';

class Delete extends Component {
    url = Global.url;

    todoId = null;

    nameRef = React.createRef();
    descriptionRef = React.createRef();

    state = {
        todo: {},
        status: null
    };

    componentWillMount() {
        this.todoId = this.props.match.params.id;
        this.getTodo(this.todoId);
        this.deleteTodo();
    }

    getTodo = (id) => {
        axios.get(this.url + 'get-todo/' + id)
            .then(res => {
                this.setState({
                    todo: res.data.todo
                })
            });
    }

    changeState = () => {
        this.setState({
            todo: {
                name: this.nameRef.current.value,
                description: this.descriptionRef.current.value
            }
        });
    }

    deleteTodo = () => {
        axios.delete(this.url + 'delete/' + this.todoId, this.state.todo)
            .then(res => {
                this.setState({
                    todos: res.data.todos,
                    status: 'deleted'
                });
            });
    }

    render() {

        if (this.state.status === 'deleted') {
            return <Redirect to="/" />;
        }

        return (
            <h2>Deleted...</h2>
        );
    }
}

export default Delete;