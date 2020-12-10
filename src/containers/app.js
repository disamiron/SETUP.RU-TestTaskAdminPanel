import React from "react";
import { connect } from "react-redux"
import TodoList from "../components/todo-list";
import AddTodo from "../components/add-todo";

import {addTodo, toggleTodo, onchangeName, onchangeEmail, onchangePassword, onchangePhone, onchangeStatus, searchEmail, filterCheckAdmin, filterCheckClient, filterCheckPartner} from "../actions";

let App = (props) => {
    const {
        todos, addTodo, toggleTodo, onchangeName, onchangeEmail, onchangePassword, onchangePhone, onchangeStatus, searchEmail, filterCheckAdmin, filterCheckClient, filterCheckPartner
    } = props;

    return (
        <div class="main-widget">
            <p class="fig">
                <img src="img/logo.png" 
                width="800" height="120" alt="ЛОГО"></img>
            </p>

            <input searchEmail = {searchEmail} 
            class="filter-email"
                type="text"
                placeholder="Фильтр Email"
                value={todos.form.filterEmail}
                onChange={ev => {
                    searchEmail(ev.target.value)
            }}            />


            <input filterCheckAdmin = {filterCheckAdmin}
            id="filter-admin"
            type="checkbox"
            checked={todos.form.filterAdmin}
            onChange={ev => {
                filterCheckAdmin(todos.form.filterAdmin)
            }}
            ></input>
            <label for="filter-admin">Admins</label>



            <input filterCheckClient = {filterCheckClient}
            id="filter-client"
            type="checkbox"
            checked={todos.form.filterClient}
            onChange={ev => {
                filterCheckClient(todos.form.filterClient)
            }}
            ></input>
            <label for="filter-client">Clients</label>


            <input filterCheckPartner = {filterCheckPartner}
            id="filter-partner"
            type="checkbox"
            checked={todos.form.filterPartner}
            onChange={ev => {
                filterCheckPartner(todos.form.filterPartner)
            }}
            ></input>
            <label for="filter-partner">Partners</label>

            <TodoList todos = {todos} toggleTodo = {toggleTodo} />
            <AddTodo todos = {todos} addTodo = {addTodo} 
                onchangeName = {onchangeName} 
                onchangeEmail = {onchangeEmail}
                onchangePassword = {onchangePassword}
                onchangePhone = {onchangePhone}
                onchangeStatus = {onchangeStatus}
                />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todos: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: ([fullName, email, password, phone, status, date]) => dispatch(addTodo([fullName, email, password, phone, status, date])),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        onchangeName: (fullName) => dispatch(onchangeName(fullName)),
        onchangeEmail: (email) => dispatch(onchangeEmail(email)),
        onchangePassword: (password) => dispatch(onchangePassword(password)),
        onchangePhone: (phone) => dispatch(onchangePhone(phone)),
        onchangeStatus: (status) => dispatch(onchangeStatus(status)),
        searchEmail: (filterEmail) => dispatch(searchEmail(filterEmail)),
        filterCheckAdmin: (filterAdmin) => dispatch(filterCheckAdmin(filterAdmin)),
        filterCheckClient: (filterClient) => dispatch(filterCheckClient(filterClient)),
        filterCheckPartner: (filterPartner) => dispatch(filterCheckPartner(filterPartner))
    }
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;