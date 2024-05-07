import React from 'react'


const Users = ({ user, deleteUser, setEditUser, setViewForm, setModalsIn }) => {
    const url = 'https://backend-todo-app-jorge.onrender.com/users'

    const handleDelete = () => {
        deleteUser(url, user.id)
        setModalsIn("User Deleted")
    }

    const handleEdit = () => {
        setEditUser(user)
        setViewForm(true)
    }
    return (
        <div className=' border rounded-xl flex flex-col justify-center  w-full max-w-[300px] [&>div]:space-x-4 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>label]:ml-2 [&>h2]:mx-5 shadow overflow-hidden bg-slate-200'>

            <header className=' bg-purple-700 flex flex-col justify-center items-center h-[100px] shadow border-b'>
                <img className=' w-[50px] h-[50px] rounded-full' src="/User.jpg" alt="User" />
                <div>
                    <h2 className=' text-white font-semibold'>{user.first_name} {user.last_name}</h2>
                </div>
            </header>

            <label>Email:</label>
            <h2>{user.email}</h2>


            <label>Birthday:</label>
            <h2>{user.birthday}</h2>

            <div className=' my-3'>
                <button onClick={handleDelete} className='bg-red-500 rounded-xl w-full max-w-[100px] py-2 text-white font-medium'>Delete <i className='bx bxs-trash'></i></button>
                <button onClick={handleEdit} className='bg-green-500 rounded-xl w-full max-w-[100px] py-2 text-white font-medium'>Edit <i className='bx bxs-edit'></i></button>
            </div>

        </div>
    )
}

export default Users