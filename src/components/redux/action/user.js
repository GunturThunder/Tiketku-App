import axios from 'axios';

export const getAllUsers = () => {
    return {
        type: 'GET_HOTELS',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.39:8282/v1/user`
        })
    }
}

export const updateUsers = (data, userId) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: axios({
            method: "PATCH",
            url: `http://192.168.1.39:8282/v1/user/update/${userId}`,
            data: data
        })
    }
}