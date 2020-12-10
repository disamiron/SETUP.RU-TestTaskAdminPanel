import React from "react";


const TodoList = (props) => {
    const {todos, toggleTodo} = props; //const todos = this.props.todos

    function filterStatus (status) {
        if((todos.form.filterAdmin) && (status=="admin")) {
                return true
        } else if ((todos.form.filterClient) && (status=="client")) {
            return true 
        } else if ((todos.form.filterPartner) && (status=="partner")) {
            return true 
        } else {
            return false
        }
    }
    ;

    return (
        <div>
            <div class="header">
            
            </div>

            <div class="table">
            <tbody>


                {todos.comments.map(todo => {if  ((todo.email.includes(todos.form.filterEmail)) && filterStatus(todo.status)) {
                    
                    return (
                        
                            <tr
                            key={todo.id}
                            >
                                <td>{todo.fullName}</td>
                                <td>{todo.email}</td>
                                <td>{todo.password}</td>
                                <td>{todo.phone}</td>
                                <td>{todo.status}</td>
                                <td>{todo.date}</td>
                                <td>{todo.dateChange}</td>
                            <button class="delete-btn" onClick = {ev => toggleTodo(todo.id)}>Удалить</button>    
                            </tr>
                        

                    )
                    
                }
                })
                }
            </tbody>
            </div>
      </div> 
    );
};

export default TodoList;