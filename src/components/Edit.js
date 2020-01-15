import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Redirect } from 'react-router-dom';

class Edit extends Component {
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

    saveTodo = (e) => {
        e.preventDefault();

        this.changeState();

        axios.put(this.url + 'update/' + this.todoId, this.state.todo)
            .then(res => {
                if (res.data.todo) {
                    this.setState({
                        todo: res.data.todo,
                        status: 'success'
                    });
                } else {
                    this.setState({
                        status: 'failed'
                    });
                }
            });
    }

    render() {

        let todo = this.state.todo;

        if (this.state.status === 'success') {
            return <Redirect to="/" />;
        }

        return (
            <div>
                    <form onSubmit={this.saveTodo}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={todo.name} ref={this.nameRef} name="name" onChange={this.changeState} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea ref={this.descriptionRef} defaultValue={todo.description} name="description" onChange={this.changeState} />
                        </div>

                        <input type="submit" value="Save" />
                    </form>
            </div>
        );
    }
}

export default Edit;