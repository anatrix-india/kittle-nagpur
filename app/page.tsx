'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'
import { menu } from './data/menu'
import { Language } from './types/menu'



export default function DigitalMenu() {
  const [language, setLanguage] = useState<Language>('english')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex flex-col">
        <div className='flex justify-center items-center gap-4 '>
          <span className=' relative w-20 h-20 '>
            <Image src="/assets/logo.png" alt="Logo" layout='fill'
              objectFit="cover" />
          </span>

          <h1 className="text-3xl font-bold text-gray-800 ">केटली अमृततुल्य</h1>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <h3 className="text-2xl font-bold text-gray-800">Menu</h3>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
            >
              {language.charAt(0).toUpperCase() + language.slice(1)}
              <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <button
                  onClick={() => { setLanguage('hindi'); toggleDropdown() }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Hindi
                </button>
                <button
                  onClick={() => { setLanguage('english'); toggleDropdown() }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  English
                </button>
                <button
                  onClick={() => { setLanguage('marathi'); toggleDropdown() }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Marathi
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menu.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex items-center px-4">
            <div className=" relative w-20 h-20">
              <Image
                src={item.image}
                alt={item.name[language]}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{item.name[language]}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.quantity}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold">₹{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}