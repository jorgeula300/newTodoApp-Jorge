import axios from "axios"
import { useState } from "react"
import { set } from "react-hook-form"

const userCrud = () => {
    const [user, setUser] = useState()

    const getUser = (url) => {
        axios.get(url)
            .then(response => {
                setUser(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const createUser = (url, data) => {
        axios.post(url, data)
            .then(response => {
                setUser(user?[...user, response.data]:response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const updateUser = (url, id ,data) => {
        axios.put(url+id, data)
            .then(response => {
                setUser(user?.map(e => e.id === id ? response.data : e))
            }).catch(error => {
                console.log(error)
            })
    }

    const deleteUser = (url, id) => {
        axios.delete(url+id)
            .then(response => {
                setUser(user?.filter(e => e.id !== id))
            }).catch(error => {
                console.log(error)
            })
    }

    return [user, getUser, createUser, updateUser, deleteUser]

}

export default userCrud