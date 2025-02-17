import * as React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchBar = () => {
  return (
    <form>
      <div className='relative'>
        <input
          type='search'
          placeholder='Buscador...'
          className='py-1.5 px-2.5 rounded-md outline-none text-sm text-gray-800 w-full border shadow-sm'
        />
        <AiOutlineSearch className='absolute top-1/2 -translate-y-1/2 right-3.5 text-gray-500 cursor-pointer' />
      </div>
    </form>
  )
}
