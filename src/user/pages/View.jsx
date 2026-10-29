import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { buyBookAPI, viewBookAPI } from '../../services/alllApi'
import axiosInstance from '../../api/axiosInstance'
import {loadStripe} from '@stripe/stripe-js';

function View() {

  const [modal, SetModal] = useState(false)
  const { id } = useParams()
  const [bookDetails, setBookDetails] = useState({})
  console.log(bookDetails);

  useEffect(() => {
    getBookDetails()
  }, [])

  const getBookDetails = async () => {
    const result = await viewBookAPI(id)
    setBookDetails(result.data)
  }

  const makePayment = async ()=>{
    // console.log(import.meta.env.VITE_STRIPE_PK);
    // load  stripe
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK);
    console.log(stripe);
    // API call
    const result = await buyBookAPI(id)

    // console.log(result.data.checkOutURL);

    window.location.href = result.data.checkOutURL
    
    

  }


  return (
    <>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-400">
          <div className="md:grid grid-cols-4 gap-x-10">
            {/* image */}
            <div className="col-span-1">
              <img className='w-full' src={bookDetails?.imageURL} alt="book" />
            </div>
            {/* book deatils */}
            <div className="col-span-3">
              <div className="flex justify-between mt-5 md:mt-0">
                <h3 className='text-3xl font-bold'>{bookDetails?.title}</h3>
                <button onClick={() => SetModal(true)} className='text-gray-500'><FaEye /></button>
              </div>
              <h2 className="text-blue-600 font-bold text-xl my-5">{bookDetails?.author}</h2>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold ">Publisher: {bookDetails?.publisher}</p>
                <p className="font-bold ">Language: {bookDetails?.language}</p>
                <p className="font-bold ">No. of pages: {bookDetails?.pages}</p>
                <p className="font-bold ">catagory: {bookDetails?.category}</p>
                <p className="font-bold ">ISBN: {bookDetails?.isbn}</p>
                <p className="font-bold ">Seller: {bookDetails?.sellerMail}</p>
              </div>
              <div >
                <h4 className="font-bold text-lg">Abstract: {bookDetails?.abstract}</h4>
              </div>
              <div className="flex justify-end">
                <Link to={'/books'} className='bg-blue-900 text-white p-2 font-black flex justify-center items-center gap-2'><FaBackward />Back</Link>
                <button onClick={makePayment} className="bg-green-900 text-white font-black ms-5 p-2">Buy ₹ {bookDetails?.price}</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        {
          modal &&
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => SetModal(false)}
          >
            <div
              className="w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal title */}
              <div className="flex items-center justify-between bg-black p-4 text-white">
                <h3 className="text-lg font-semibold">Book Images</h3>

                <button
                  onClick={() => SetModal(false)}
                  className="rounded px-3 py-1 text-xl hover:bg-gray-700"
                >
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="p-5">
                <p className="mb-4 flex items-center text-blue-600">
                  <FaCamera className="me-2" />
                  Camera Clicks of the book
                </p>

                {
                  bookDetails?.uploadImage?.length > 0 ?
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {
                        bookDetails.uploadImage.map((filename, index) => (
                          <div
                            key={filename || index}
                            className="flex h-72 min-w-52 shrink-0 items-center justify-center rounded-lg border bg-gray-50 p-2"
                          >
                            <img
                              src={`${axiosInstance.defaults.baseURL}/uploads/${filename}`}
                              alt={`Book image ${index + 1}`}
                              className="max-h-full max-w-full rounded object-contain"
                            />
                          </div>
                        ))
                      }
                    </div>
                    :
                    <div className="my-8 text-center font-semibold">
                      Image Not Found
                    </div>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default View
