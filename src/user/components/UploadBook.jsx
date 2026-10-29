import React, { useState } from 'react'
import { FaPen, FaPlus } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { addBookAPI } from '../../services/alllApi';



function UploadBook() {
    const [bookDetails, setBookDetails] = useState({
        title: "", author: "", imageURL: "", pages: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImage: []
    })
    const [preview, setPreview] = useState("")
    const [previewList, setPreviewList] = useState([])

    console.log(bookDetails);

    const handleUploadImage = (e) => {
        const imageFiles = e.target.files[0]
        const uploadedImageArray = bookDetails.uploadImage
        uploadedImageArray.push(imageFiles)
        setBookDetails({ ...bookDetails, uploadImage: uploadedImageArray })
        const url = URL.createObjectURL(imageFiles)
        setPreview(url)
        const demoPreviewList = previewList
        demoPreviewList.push(url)
        setPreviewList(demoPreviewList)
    }

    const resetForm = () => {
        setBookDetails({
            title: "", author: "", imageURL: "", pages: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImage: []
        })
        setPreviewList([])
        setPreview("")
    }

    const handleAddBook = async ()=>{
        const {title,author,imageURL,pages,price,discountPrice,abstract,publisher,isbn,language ,category,uploadImage}=bookDetails
        if(!title || !author || !imageURL || !pages || !price || !discountPrice || !abstract || !publisher || !isbn || !language || !category || !uploadImage){
            toast.info("please fill the form completely")
        }else{
            // api call
            // toast.success("api call")
            const reqBody = new FormData()
            for(let key in bookDetails){
                if(key !=uploadImage){
                    reqBody.append(key,bookDetails[key])
                }else{
                    bookDetails.uploadImage.forEach(imageFiles=>{
                        reqBody.append("uploadImage",imageFiles)
                    })
                }
            }
            const result = await addBookAPI(reqBody)
            console.log(result);
            if(result.status==201){
                toast.success("Book Added Successfully")
            }else{
                toast.warning(result)
            }
            resetForm()
        }
    }

    return (
        <div className='p-10 my-20 mx-5 bg-gray-200'>
            <h1 className="text-center text-3xl font-medium">Upload Book</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Auther' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.imageURL} onChange={e => setBookDetails({ ...bookDetails, imageURL: e.target.value })} type="text" placeholder='Book Cover URL' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.pages} onChange={e => setBookDetails({ ...bookDetails, pages: e.target.value })} type="text" placeholder='Total pages' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <textarea value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" placeholder='Abstract' rows={'5'} className='w-full p-2 rounded bg-white' />
                    </div>
                </div>
                <div className="px-3">
                    <div className="mb-3">
                        <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.language} onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className='w-full p-2 rounded bg-white' />
                    </div>
                    {/* upload book image */}
                    <div className="mb-3 flex justify-center items-center mt-10">
                        <label htmlFor="BookImage">
                            <input onChange={e => handleUploadImage(e)} type="file" id='BookImage' hidden />
                            <img className='w-35 h-35 ' src={preview ? preview : "https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png"} alt="user" />
                        </label>
                    </div>
                    {/* preview of upload books */}
                    {
                        preview &&
                        <div className="flex justify-center items-center">
                            {
                                previewList?.map((imageURL, index) => (
                                    <img key={`${imageURL}-${index}`} width={'70px'} height={'70px'} className='mx-2' src={imageURL} alt="cover page" />
                                ))
                            }
                            {
                                previewList.length < 3 &&
                                <label htmlFor="BookUpload" >
                                    <input onChange={e => handleUploadImage(e)} type="file" id='BookUpload' hidden />
                                    <FaPlus className='text-3xl ms-2' />
                                </label>
                            }
                        </div>
                    }
                </div>
            </div>
            <div className="flex md:justify-end justify-center w-full p-5 mt-5">
                <button onClick={resetForm} className="bg-red-600 text-white p-3 rounded me-2">Reset</button>
                <button onClick={handleAddBook} className="bg-green-800 text-white p-3 rounded">Add Book</button>

            </div>
            <ToastContainer position='top-center' theme='colored' autoClose='3000' />
        </div>
    )
}

export default UploadBook
