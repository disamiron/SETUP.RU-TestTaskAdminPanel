import React from "react";
import dateNow from "../components/date-now"


const AddTodo = (props) => {
    const {todos, addTodo, onchangeName, onchangeEmail, onchangePassword, onchangePhone, onchangeStatus} = props;
    return (
        <div>
            <input class="new-user-name"
                type="text"
                placeholder="ФИО"
                value={todos.form.fullName}
                onChange={ev => {
                    onchangeName(ev.target.value)
                  }}
            /><br/>
            <input class="new-user-email"
                type="email"
                placeholder="E-mail"
                value={todos.form.email}
                onChange={ev => {
                    onchangeEmail(ev.target.value)
                  }}
            /><br/>
            <input class="new-user-email"
                type="text"
                placeholder="Пароль"
                value={todos.form.password}
                onChange={ev => {
                    onchangePassword(ev.target.value)
                  }}
            /><br/>
            <input class="new-user-phone"
                type="text"
                placeholder="Телефон"
                value={todos.form.phone}
                onChange={ev => {
                    onchangePhone(ev.target.value)
                  }}
            /><br/>

            <label for="new-user-status">Choose a status:</label>
            <select id="new-user-status" name="status" 
                onChange={ev => {
                    console.log(document.getElementById("new-user-status").value);
                    onchangeStatus(document.getElementById("new-user-status").value)
                    }}>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
                <option value="partner">Partner</option>
            </select>


            <button class="add-btn"
                onClick={ev => {
                addTodo([todos.form.fullName, todos.form.email, todos.form.password, todos.form.phone, (todos.form.status || "admin" ), dateNow()]);
            }}>Добавить пользователя
            </button>
        </div>
    )


}





  
  
export default AddTodo