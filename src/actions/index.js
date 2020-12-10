let nextTodoId = 6;

export const addTodo = ([fullName, email, password, phone, status, date]) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        fullName,
        email, password, phone, status, date
    }
};

export const toggleTodo = (id) => {
    return {
        type: "REMOVE_COMMENT",
        id
    }
};

export const onchangeName = (fullName) => {
    return {
        type: "CHANGE_NAME",
        fullName
    }
};

export const onchangeEmail = (email) => {
    return {
        type: "CHANGE_EMAIL",
        email
    }
};

export const onchangePassword = (password) => {
    return {
        type: "CHANGE_PASSWORD",
        password
    }
}; 

export const onchangePhone = (phone) => {
    return {
        type: "CHANGE_PHONE",
        phone
    }
};

export const onchangeStatus = (status) => {
    return {
        type: "CHANGE_STATUS",
        status
    }
};

export const searchEmail = (filterEmail) => {
    return {
        type: "FILTER_EMAIL",
        filterEmail
    }
};

export const filterCheckAdmin = (filterAdmin) => {
    return {
        type: "FILTER_ADMIN",
        filterAdmin
    }
};

export const filterCheckClient = (filterClient) => {
    return {
        type: "FILTER_CLIENT",
        filterClient
    }
};

export const filterCheckPartner = (filterPartner) => {
    return {
        type: "FILTER_PARTNER",
        filterPartner
    }
};