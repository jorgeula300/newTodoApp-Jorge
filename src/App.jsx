import { useEffect, useState } from "react"
import Header from "./components/Header"
import userCrud from "./hooks/userCrud"
import Users from "./components/Users"
import FormModal from "./components/FormModal"
import ModalsInfo from "./components/ModalsInfo"




function App() {

  const url = 'https://backend-todo-app-jorge.onrender.com/users'
  const [viewForm, setViewForm] = useState(false)
  const [editUser, setEditUser] = useState(false)
  const [ModalsIn, setModalsIn] = useState()
  const [user, getUser, createUser, updateUser, deleteUser] = userCrud()


  useEffect(() => {
    getUser(url)
  }, [])

  useEffect(
    () => {
      setTimeout(() => {
        setModalsIn()
      }, 2000)

    }, [ModalsIn]
  )

  return (
    <div>
      <Header setViewForm={setViewForm} />
      <div className=" px-5 py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
        {
          user?.map(user => (
            <Users key={user.id} user={user} deleteUser={deleteUser} setEditUser={setEditUser} setViewForm={setViewForm} setModalsIn={setModalsIn} />
          ))
        }

      </div>

      <FormModal viewForm={viewForm} setViewForm={setViewForm} createUser={createUser} updateUser={updateUser} editUser={editUser} setEditUser={setEditUser} user={user} setModalsIn={setModalsIn} />

      <ModalsInfo ModalsIn={ModalsIn} />
    </div>
  )
}

export default App
