import * as axios from "axios/index"

const instance = axios.create({
    baseURL: 'http://192.168.1.47:3001/',
    withCredentials: true
})

export const usersAPI = {
    login(email, password) {
        return instance.post(`login`, { email, password })
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.post(`logout`)
            .then(response => {
                return response.data
            })
    },
    getAboutMe() {
        return instance.get(`about_me`)
            .then(responce => {
                return responce.data
            })
    },
    updateAboutMe(about_me) {
        return instance.patch(`about_me`, {about_me})
            .then(responce => {
                return responce.data
            })
    },
    getUsers() {
        return instance.get(`users`)
            .then(response => {
                return response.data
            })
    },
    getCurrentUser(userId) {
        return instance.get(`users/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getFollowUsers() {
        return instance.get(`followers`)
            .then(response => {
                return response.data
            })
    },
    getMe() {
        return instance.get(`users/me`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.patch(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return instance.patch(`unfollow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}

export const dialogsAPI = {
    getMessages(userId) {
        return instance.get(`messages/${userId}`)
            .then(response => {
                return response.data
            })
    }
}