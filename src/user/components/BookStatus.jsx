import React, { useEffect, useState } from 'react'
import { deleteUserBooksAPI, getUserBooksAPI } from '../../services/alllApi';

function BookStatus() {

    const [uploadBook, setUploadBooks] = useState([])
    console.log(uploadBook);

    useEffect(() => {
        getUploadBooks()
    }, [])

    const getUploadBooks = async () => {
        const result = await getUserBooksAPI()
        setUploadBooks(result.data)
    }

    const deleteBook = async(id)=>{
        const result = await deleteUserBooksAPI(id)
        getUploadBooks()
    }

    return (
        <div className='p-10 my-15 shadow rounded '>
            {/* duplicate book */}
            {
                uploadBook.length > 0 ?
                    uploadBook?.map(book => (
                        <div key={book.title} className="p-5 rounded mt-4 bg-blue-100">
                            <div className="md:grid grid-cols-[3fr_1fr]">
                                <div className="px-4">
                                    <h1 className="text-2xl">{book?.title}</h1>
                                    <h2 className="text-xl">{book?.author}</h2>
                                    <h3 className='text-lg text-blue-700'>₹ {book?.discountPrice}</h3>
                                    <p className='text-justify'>{book?.abstract}</p>
                                    {/* status */}
                                    <div className="flex my-3">
                                        {
                                            book?.status == "pending" ?
                                                // pending
                                                < img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-vector/20220322/ourmid/pngtree-pending-stamp-illustration-symbol-stamp-vector-png-image_3791329.png" alt="Pending" />
                                                :
                                                book?.status == "approved" ?
                                                    // approved
                                                    <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-vector/20250921/ourmid/pngtree-green-approved-stamp-png-image_17542466.webp" alt="Approved" />
                                                    :
                                                    // sold
                                                    <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/021/433/029/non_2x/sold-rubber-stamp-free-png.png" alt="Sold" />
                                        }
                                    </div>
                                </div>
                                <div className="px-4 mt-4 md:mt-0">
                                    <img className='w-full' src={book.imageURL} alt="Book" />
                                    <div className="mt-4 flex justify-end">
                                        <button onClick={()=>deleteBook(book?._id)} className='bg-red-800 text-white p-2 rounded'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                    :
                    <div className="text-center font-bold my-5">Book Not Found!!!</div>
            }
        </div>
    )
}

export default BookStatus
