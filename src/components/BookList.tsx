import CartIcon from '@/icons/CartIcon'
import React from 'react'

export default function BookList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Título del libro</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Autor/es.</p>
          <div className='lg:flex justify-between sm:block'>
            <a href="#" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-dark-orange rounded-lg hover:bg-dark-brown focus:ring-2 focus:outline-none focus:ring-dark-yellow dark:bg-dark-orange dark:hover:bg-dark-orange dark:focus:ring-dark-orange">
                <CartIcon />
                Agregar al carrito
            </a>
            <span className='text-dark-brown align-middle font-bold'>ARS$29999</span>
          </div>
        </div>
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
      </div>
    </div>

  )
}
