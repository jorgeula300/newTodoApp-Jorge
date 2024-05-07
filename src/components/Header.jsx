import React from 'react'

const Header = ({ setViewForm }) => {

    const handleCreateUser = () => {
        setViewForm(true)
    }

    return (
        <header className=' w-full shadow py-5 px-5'>
            <nav className=' flex justify-between items-center [&>h1]:text-lg [&>h1]:font-bold [&>button]:bg-purple-700 [&>button]:px-2 [&>button]:py-1 [&>button]:rounded-xl [&>button]:text-white [&>button]:shadow [&>button]:border'>
                <h1>My Todo App</h1>
                <button onClick={handleCreateUser} >Create User</button>
            </nav>
        </header>
    )
}

export default Header