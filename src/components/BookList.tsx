import CartIcon from '@/icons/CartIcon'
import { getBooksBySearch } from '@/services/books/books'
import noImage from '../assets/no-image.png'

export default async function BookList() {

  const books = await getBooksBySearch('narnia');

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {books?.map((book) => (
        <div key={book.id} className="max-w-md bg-white border border-gray-200 rounded-lg shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700">
          <a href="#">
            <img className="rounded-lg w-full md:h-80 object-cover" src={book.volumeInfo?.imageLinks?.thumbnail || noImage.src} alt={book.volumeInfo?.title} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden truncate">{book.volumeInfo?.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden truncate">{book.volumeInfo?.authors}</p>
            <div className='flex justify-between flex-col'>
              {book?.saleInfo?.listPrice?.amount ? (
                <>
                  <span className='text-dark-brown align-middle text-xl font-bold'>{`$${book?.saleInfo?.listPrice?.amount} USD`}</span>
                  <a href="#" className="inline-flex justify-center items-center px-2 py-1 mt-3 text-md font-medium text-center text-white bg-dark-orange rounded-lg hover:bg-dark-brown focus:ring-2 focus:outline-none focus:ring-dark-yellow dark:bg-dark-orange dark:hover:bg-dark-orange dark:focus:ring-dark-orange">
                      <CartIcon />
                      Agregar al carrito
                  </a>
                </>
              ) : (
                <span className='text-dark-brown align-middle font-bold'>No disponible</span>
              )
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
