import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/app"
import { createStore } from "redux";
import todos from "./reducers";

// const initialState = {
//   comments: [
//     {id:0, comment: "Лучше гор могут быть только горыs, на которых еще не бывал.", name:"Владимир Высоцкий", date: "11.08.2020"},
//     {id:1, comment: "К ночи эти горы будут кишить орками. Надо успеть в леса Лотлориена. Идём Боромир. Леголас. Гимли.", name:"Арагорн", date: "15.09.2020"},
//     {id:2, comment: "Горы зовут, и я должен идти!", name:"Джон Мьюр", date: "23.10.2020"}],
//   form: {
//     name: '',
//     comment: ''
//   }
// };

const initialState = {
  comments: [
    {id:0, fullName: "Арагорн Король Средиземья", email: "aragorn@king.mid", password: "king", phone: "+79998887766", status: "admin", date: "11.09.2020", dateChange: "18.09.2020"},
{id:1, fullName: "Иванов Иван Иванович", email: "ivan@ivan.ivan", password: "ivannavi", phone: "+79876543210", status: "client", date: "13.09.2020", dateChange: "-"},
{id:2, fullName: "Ваш дружелюбный сосед", email: "spider@man.com", password: "maryjane<3", phone: "+74441234412", status: "partner", date: "15.10.2020", dateChange: "-"},
{id:3, fullName: "Нешпионов Завами Неслежов", email: "spy@james.bond", password: "10010110", phone: "+79998887733", status: "client", date: "07.11.2020", dateChange: "10.11.2020"},
{id:4, fullName: "Геральт из Ривии", email: "geralt@witcher.com", password: "thefutureishere", phone: "+799900000001", status: "partner", date: "08.11.2020", dateChange: "10.12.2020"},
{id:5, fullName: "Кибер Панк 2077", email: "cyber@punk.com", password: "thefutureishere", phone: "+7999af3dd319", status: "client", date: "10.12.2020", dateChange: "-"}
],
  form: {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    status: "",
    filterEmail: "",
    filterAdmin: true,
    filterClient: false,
    filterPartner: true
  }
};

const store = createStore(todos, localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState);

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
})

ReactDOM.render(
    <App store={store}/>,
    document.querySelector("#app")
)