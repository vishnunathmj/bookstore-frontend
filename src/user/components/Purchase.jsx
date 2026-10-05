import React from 'react'

function Purchase() {
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
                            {/* purchase */}
                            <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="Pending" />
                            
                        </div>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPjoDlJoYqetaouwp6q_T2a4fslCyvmMiucWyRIP9Q4MJC4iooKh3mFM&s=10" alt="Book" />
                        <div className="mt-4 flex justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Purchase
