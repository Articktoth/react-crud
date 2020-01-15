// import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import axios from 'axios';
// import Global from '../Global';


// class Todo extends Component {
//     url = Global.url;

//     state = {
//         todo: false,
//         status: null
//     };


//     componentWillMount() {
//         this.getTodo();
//     }

//     getTodo = () => {
//         let id = this.props.match.params.id;
//         axios.get(this.url + 'get-todo/' + id)
//             .then(res => {
//                 this.setState({
//                     todo: res.data.todo,
//                     status: 'success'
//                 });
//             })
//             .catch(err => {
//                 this.setState({
//                     todo: false,
//                     status: 'failed'
//                 });
//             });
//     }



//     render() {

//         let todo = this.state.todo;
//         return (
//             <div>
//                 {
//                     todo && 
//                     <div>
//                         {this.state.todo.name}
//                     </div>
//                 }
//             </div>
//         );
//     }
// }

// export default Todo;