import React from 'react'
import { FaPen, FaPlus } from 'react-icons/fa'

function UploadBook() {
    return (
        <div className='p-10 my-20 mx-5 bg-gray-200'>
            <h1 className="text-center text-3xl font-medium">Upload Book</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Auther' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Cover URL' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Total pages' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" placeholder='Abstract' rows={'5'} className='w-full p-2 rounded bg-white' />
                    </div>
                </div>
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ISBN' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Language' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Category' className='w-full p-2 rounded bg-white' />
                    </div>
                    {/* upload book image */}
                    <div className="mb-3 flex justify-center items-center mt-10">
                        <label htmlFor="BookImage">
                            <input type="file" id='BookImage' hidden />
                            <img className='w-35 h-35 rounded-full' src="https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png" alt="user" />
                        </label>
                    </div>
                    {/* preview of upload books */}
                    <div className="flex justify-center items-center">
                        <img width={'70px'} height={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPjoDlJoYqetaouwp6q_T2a4fslCyvmMiucWyRIP9Q4MJC4iooKh3mFM&s=10" alt="cover page" />
                        <label htmlFor="BookUpload" >
                            <input type="file" id='BookUpload' hidden />
                            <FaPlus className='text-3xl ms-2'/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex md:justify-end justify-center w-full p-5 mt-5">
                <button className="bg-red-600 text-white p-3 rounded me-2">Reset</button>
                <button className="bg-green-800 text-white p-3 rounded">Add Book</button>

            </div>
        </div>
    )
}

export default UploadBook
