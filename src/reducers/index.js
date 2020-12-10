const todos = (state = [], action) => {

    switch(action.type) {

        case "ADD_TODO":
            if (action.fullName != "" & action.email != "" & action.password != "" & action.phone != "") {
            return {
                comments: [
                ...state.comments,
                {
                    id: action.id,
                    fullName: action.fullName,
                    email: action.email,
                    password: action.password,
                    phone: action.phone,
                    status: action.status,
                    date: action.date
                }],
                form: {
                    fullName: "",
                    email: "",
                    password: "",
                    phone: "",
                    status: "",
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                  }
            }} else {
                alert("Заполните поле формы")
                return state;
            }

        case "REMOVE_COMMENT":
            return {
                comments: state.comments.filter((todo) => todo.id !== action.id),
                form: {
                    fullName: state.form.fullName,
                    email: state.form.email,
                    password: state.form.password,
                    phone: state.form.phone,
                    status: state.form.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                }
            }
        
        case "CHANGE_NAME":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: action.fullName,
                    email: state.form.email,
                    password: state.form.password,
                    phone: state.form.phone,
                    status: state.form.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                }
            }
        case "CHANGE_EMAIL":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: state.form.fullName,
                    email: action.email,
                    password: state.form.password,
                    phone: state.form.phone,
                    status: state.form.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                }
        }

        case "CHANGE_PASSWORD":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: state.form.fullName,
                    email: state.form.email,
                    password: action.password,
                    phone: state.form.phone,
                    status: state.form.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                }
            }
        case "CHANGE_PHONE":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: state.form.fullName,
                    email: state.form.email,
                    password: state.form.password,
                    phone: action.phone,
                    status: state.form.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                }
        }

        case "CHANGE_STATUS":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: state.form.fullName,
                    email: state.form.email,
                    password: state.form.password,
                    phone: state.form.phone,
                    status: action.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                }
        }

        case "FILTER_EMAIL":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: state.form.fullName,
                    email: state.form.email,
                    password: state.form.password,
                    phone: state.form.phone,
                    status: state.status,
                    filterEmail: action.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                }

        }

        case "FILTER_ADMIN":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: state.form.fullName,
                    email: state.form.email,
                    password: state.form.password,
                    phone: state.form.phone,
                    status: state.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: !action.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: state.form.filterPartner,
                }

        }

        case "FILTER_CLIENT":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: state.form.fullName,
                    email: state.form.email,
                    password: state.form.password,
                    phone: state.form.phone,
                    status: state.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: !action.filterClient,
                    filterPartner: state.form.filterPartner,
                }

        }

        case "FILTER_PARTNER":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    fullName: state.form.fullName,
                    email: state.form.email,
                    password: state.form.password,
                    phone: state.form.phone,
                    status: state.status,
                    filterEmail: state.form.filterEmail,
                    filterAdmin: state.form.filterAdmin,
                    filterClient: state.form.filterClient,
                    filterPartner: !action.filterPartner,
                }

        }

        default:
            return state;
    }
}

export default todos;