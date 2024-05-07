import React from 'react'

const ModalsInfo = ({ ModalsIn }) => {
    return (
        <div className={` ${ModalsIn ? "flex" : "hidden"} min-w-[200px] h-[50px] shadow border overflow-hidden fixed bottom-2 right-2 rounded-xl justify-between items-center pr-2 bg-slate-100`}>
            <header className=' w-[50px] h-[50px] text-4xl flex justify-center items-center bg-green-600 text-white '><i className='bx bxs-check-circle'></i></header>
            <h2 className=' text-black font-semibold text-xl'>{ModalsIn}</h2>
        </div>
    )
}

export default ModalsInfo