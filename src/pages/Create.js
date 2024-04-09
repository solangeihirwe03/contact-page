import React from 'react'

const Create = () => {
    return (
        <div className="bg-white text-black flex flex-col p-6 justify-center w-[80%] h-[70vh] rounded-[22px]">
            <h2 className='pb-3 font-semibold text-2xl'>Add Contact</h2>
            <form className="flex flex-col gap-2 w-full">
                <label for="fullName">Full name</label>
                <input
                    type="text"
                    name="fullName"
                    className="border-2 border-[#b0b0b0] rounded-lg h-10 p-1"
                />

                <label for="email">Email</label>
                <input
                    type="email"
                    name="email"
                    className="border-2 border-[#b0b0b0] rounded-lg h-10 p-1"
                />

                <label for="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    className="border-2 border-[#b0b0b0] rounded-lg h-10 px-1"
                />

                <label for="picture">Picture</label>
                <input
                    type="file"
                    name="picture"
                    className="border-2 border-[#b0b0b0] rounded-lg h-10 p-1"
                />

                <button className="flex justify-start items-center px-4 bg-[#7142FF] text-white h-10 rounded-lg ">
                    Create contact
                </button>
            </form>
        </div>
    );
}

export default Create
