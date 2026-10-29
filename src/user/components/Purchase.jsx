import React, { useEffect, useState } from 'react'
import { getUserBroughtBooksAPI } from '../../services/alllApi'

function Purchase() {

const [broughtBooks, setBroughtBooks] = useState([])
console.log(broughtBooks)

useEffect(() => {
    getBroughtBooks()
}, [])

const getBroughtBooks = async () => {
    const result = await getUserBroughtBooksAPI()
    setBroughtBooks(result.data)
}

return (
    <div className='p-10 my-15 shadow rounded '>

        {/* purchased books */}
        {
            broughtBooks.length > 0 ?
                broughtBooks.map(book => (
                    <div key={book._id} className="p-5 rounded mt-4 bg-blue-100">
                        <div className="md:grid grid-cols-[3fr_1fr]">

                            <div className="px-4">
                                <h1 className="text-2xl">{book?.title}</h1>
                                <h2 className="text-xl">{book?.author}</h2>
                                <h3 className='text-lg text-blue-700'>
                                    ₹ {book?.discountPrice}
                                </h3>
                                <p className='text-justify'>{book?.abstract}</p>

                                {/* purchase status */}
                                <div className="flex my-3">
                                    <img
                                        width={'120px'}
                                        height={'120px'}
                                        src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png"
                                        alt="Purchased"
                                    />
                                </div>
                            </div>

                            <div className="px-4 mt-4 md:mt-0">
                                <img
                                    className='w-full'
                                    src={book?.imageURL}
                                    alt={book?.title}
                                />
                            </div>

                        </div>
                    </div>
                ))
                :
                <div className="text-center font-bold my-5">
                    No Book Purchased Yet!!!
                </div>
        }

    </div>
)

}

export default Purchase