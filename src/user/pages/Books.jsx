import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksAPI } from '../../services/alllApi'
import { searchContext } from '../../contextAPI/ShareContext'


function Books() {

  const {searchKey,setSearchKey} = useContext(searchContext)
  const [toggle, setToggle] = useState(false)
  const [token, setToken] = useState("")
  const [allBooks, setAllBooks] = useState([])
  const [categoryList,setCategoryList] = useState([])
  const [dummyAllBooks,setDummyAllBooks] = useState([])

  // console.log(categoryList);
  


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getBooks()
    }
  }, [searchKey])

  const getBooks = async () => {
    const result = await getAllBooksAPI(searchKey)
    if (result.status == 200) {
      setAllBooks(result.data)
      setDummyAllBooks(result.data)
      const temCategory = result.data.map(item=>item.category)
      setCategoryList([...new Set(temCategory)])
      console.log(categoryList);
    }
  }

  const filterBooks = (category)=>{
    if(category != 'all'){
      setAllBooks(dummyAllBooks?.filter(book=>book.category==category))
    }else{
      getBooks()
    }
  }



  return (

    <>
      <Header />
      {
        token ?
          <>
            <div className='flex flex-col justify-center items-center my-5'>
              <h1 className="text-3xl font-bold my-5">All Books</h1>
              <div className="flex my-5">
                <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} type="text" className="p-2 border border-gray-200 w-100 rounded" placeholder='Search by book title' />
                <button className='p-2 bg-blue-600 text-white ms-2 rounded'>Search</button>
              </div>
            </div>
            {/* Grid- filter & Book card */}
            <div className="md:grid grid-cols-4 p-2 md:px-40 mb-10">
              {/* Filter */}
              <div className="col-span-1">
                <div className="flex justify-between ">
                  <h1 className='text-2xl font-bold'>Filter</h1>
                  <button onClick={() => setToggle(!toggle)} className='font-bold text-2xl md:hidden'><FaBars /></button>
                </div>
                {/* Filter catagory */}
                <div className={toggle ? "block" : "hidden md:block"}>
                  <div className='mt-3'>
                    <input onClick={()=>filterBooks('all')} type="radio" name='filter' id='no-filter' />
                    <label htmlFor="no-filter" className='ms-3'>No Filter</label>
                  </div>
                  {/* dulicate filter category */}
                  {
                    categoryList?.map((category,index)=>(
                      <div key={index} className='mt-3'>
                    <input onClick={()=>filterBooks(category)} type="radio" name='filter' id={category} />
                    <label htmlFor="no-filter" className='ms-3'>{category}</label>
                  </div>
                    ))
                  }
                </div>
              </div>
              {/* Book card */}
              <div className="col-span-3">
                <div className="md:grid grid-cols-4 md:my-0">
                  {/* Duplicating Card  */}
                  {
                    allBooks.length > 0 ?
                      allBooks.map(book => (
                        <div key={book?._id} className="shadow rounded p-3 m-4 md:my-0">
                          <img width={'100%'} height={'300px'} src={book?.imageURL} alt="Book cover image" />
                          <div className='flex flex-col justify-center items-center mt-4'>
                            <h1 className="text-blue-600 font-bold text-xl">{book?.author}</h1>
                            <h1 className="text-lg">{book?.title}</h1>
                            <Link to={`/book/${book?._id}`} className='font-bold bg-blue-500 p-2 text-white mt-2'>View Book</Link>
                          </div>
                        </div>
                      ))
                      :
                      <div className="text-center font-bold text-xl">Book Not found!!</div>
                  }
                </div>
              </div>
            </div>
          </>
          :
          <div className="min-h-screen flex justify-center items-center flex-col">
            <img width={'100%'} src="https://images.squarespace-cdn.com/content/v1/5bcedfaa65a707df96be0be9/1590102804805-7TNK3DEEF48PFQZSEO84/INCON-ExpertArticle-44-KeyToCreativity-Icon-00.jpg" alt="Page not found" />
            <p>Oh No!!!</p>
            <h3 className="text-2xl font-medium">Access only for logined user</h3>
            <Link to={'/login'} className='bg-blue-600 rounded px-2 py-3'>please login</Link>
          </div>
      }
    </>
  )
}

export default Books
