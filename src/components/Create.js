import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Redirect } from 'react-router-dom';

class Create extends Component {
    url = Global.url;

    nameRef = React.createRef();
    descriptionRef = React.createRef();

    state = {
        todo: {},
        status: null
    };

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
        axios.post(this.url + 'create', this.state.todo)
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

        if (this.state.status === 'success') {
            return <Redirect to="/" />;
        }

        return (
            <form onSubmit={this.saveTodo}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" ref={this.nameRef} name="name" onChange={this.changeState} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea ref={this.descriptionRef} name="description" onChange={this.changeState} />
                </div>

                <input type="submit" value="Save" />
            </form>
        );
    }
}

export default Create;