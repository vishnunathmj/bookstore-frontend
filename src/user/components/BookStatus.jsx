import React from 'react'

function BookStatus() {
    return (
        <div className='p-10 my-15 shadow rounded '>
            {/* duplicate book */}
            <div className="p-5 rounded mt-4 bg-blue-100">
                <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                        <h1 className="text-2xl">Title</h1>
                        <h2 className="text-xl">Author</h2>
                        <h3 className='text-lg text-blue-700'>$ Discount Price</h3>
                        <p className='text-justify'>Abstract</p>
                        {/* status */}
                        <div className="flex my-3">
                            {/* pending */}
                            <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-vector/20220322/ourmid/pngtree-pending-stamp-illustration-symbol-stamp-vector-png-image_3791329.png" alt="Pending" />
                            {/* approved */}
                            <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-vector/20250921/ourmid/pngtree-green-approved-stamp-png-image_17542466.webp" alt="Approved" />
                            {/* sold */}
                            <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/021/433/029/non_2x/sold-rubber-stamp-free-png.png" alt="Sold" />
                        </div>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPjoDlJoYqetaouwp6q_T2a4fslCyvmMiucWyRIP9Q4MJC4iooKh3mFM&s=10" alt="Book" />
                        <div className="mt-4 flex justify-end">
                            <button className='bg-red-800 text-white p-2 rounded'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookStatus
