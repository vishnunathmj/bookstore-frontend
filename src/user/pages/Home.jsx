import React from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'

function Home() {
  return (
    <>
      <Header />
      {/* Hero session*/}
      <div style={{ height: '500px' }} className="flex flex-col justify-center items-center bg-[url(/heroimage.png)] bg-cover bg-center text-white">
        <div style={{ height: '500px', background: 'rgba(0,0,0,0.8)' }} className="w-full flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold">Wonderful Book</h1>
          <p>Gift your family and friends a book</p>
          <div>
            <input type="text" placeholder='Search a Book' className='bg-white p-2 rounded-3xl w-100 text-black' />
            <FaSearch className='text-gray-500 cursor-pointer' style={{ marginTop: '-27px', marginLeft: '375px' }} />
          </div>
        </div>
      </div>

      {/* New arrivals */}
      <section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
        <h1 className='text-3xl font-bold'>New Arrivals</h1>
        <h1 className='text-3xl my-2'>Explore Our Latest Collection</h1>
        <div className="md:grid grid-cols-4 md:my-0">
          {/* Duplicating Card  */}
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img width={'100%'} height={'300px'} src="https://www.picmaker.com/assets/images/bookcovermaker/template-4.png" alt="Book cover image" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h1 className="text-blue-600 font-bold text-xl">Author</h1>
              <h1 className="text-lg">Title</h1>
              <h1 className='font-bold text-red-600'>Price</h1>
            </div>
          </div>
        </div>
        {/* Button */}
        <button className='bg-black text-white px-3 py-2 rounded cursor-pointer'>Explore More</button>
      </section>

      {/* Featured Author */}
      <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Featured Authors</h1>
          <h3 className="text-xl">Captivates with every word</h3>
          <p className="my-5 text-justify ">Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
          <p className='text-justify'>Our Author Features include:</p>

          <p className="text-justify my-3"><span className="font-black">✨ Author Profiles : </span>Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.
          </p>

          <p className="text-justify my-3"><span className="font-black">📖 Published Works : </span>Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.
          </p>

          <p className="text-justify my-3"><span className="font-black">🎤 Interviews & Insights : </span>Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author's creative world.
          </p>
        </div>
        <div className="text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OGgFsQ8vOkvim1NNHyy7aNd9T7DjBPIyAQczhGc6bcKhkHYIXCYwS81A&s=10" alt="" />
        </div>
      </section>

      {/* testimony */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold'>Testimonials</h1>
        <h1 className="text-xl my-2">See What Others Are Saying</h1>
        <div className="my-5 flex flex-col justify-center items-center">
          <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bcx_B8V9-gevggDkCdRf9rKHw1Wx5XNLg3_dxn5y1RgFwor3tXEaUHwD&s=10" alt="User" />
          <h3 className="my-3">Luca</h3>
          <p className="text-justify">This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.
          </p>
        </div>

      </section>
    </>
  )
}

export default Home
