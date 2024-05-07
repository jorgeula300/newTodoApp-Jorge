import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormModal = ({ viewForm, setViewForm, createUser, updateUser, editUser, setEditUser, setModalsIn }) => {
    const url = 'https://backend-todo-app-jorge.onrender.com/users/'
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {

        reset(editUser)


    }, [editUser])

    const submit = data => {

        if (editUser) {
            const id = editUser.id
            updateUser(url, id, data)
            setModalsIn("Modified user")
            setEditUser()
        } else {
            createUser(url, data)
            setModalsIn("Created user")
        }
        reset()
        setViewForm(false)
    }

    const handleCloseModal = () => {
        setViewForm(false)
    }
    return (
        <div className={` ${viewForm ? "flex" : "hidden"} fixed top-0 left-0 w-full min-h-[100vh] bg-[#0003] backdrop-blur-[2px] flex justify-center items-center transition-transform`}>

            <form className="w-full max-w-[400px] bg-white p-6 rounded-xl flex flex-col gap-2 [&>label]:font-medium [&>label]:px-1 [&>label]:text-sm [&>input]:border [&>input]:border-gray-400 
        [&>input]:px-2 [&>input]:rounded-lg " onSubmit={handleSubmit(submit)}>

                <header className=" flex justify-center relative">
                    <h2 className=" text-xl font-semibold">Nuevo usuario</h2>
                    <div onClick={handleCloseModal} className=" absolute top-0 right-0 text-red-600 font-semibold cursor-pointer">X</div>
                </header>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='First Name' {...register("first_name", {
                    required: true,
                    minLength: 3
                })} />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last Name' {...register("last_name", {
                    required: true,
                    minLength: 3
                })} />
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Email' {...register("email", {
                    required: true,
                    minLength: 5
                })} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='*******' {...register("password", {
                    required: true,
                    minLength: 8
                })} />
                <label htmlFor="">Birthday</label>
                <input type="date" {...register("birthday")} />


                <button className=' bg-purple-700 text-white font-medium px-2 py-1 shadow border rounded-lg'>Send</button>

            </form>
        </div>
    )
}

export default FormModal