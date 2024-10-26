'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa6'
import { menu } from './data/menu'
import { Language } from './types/menu'

export default function DigitalMenu() {
  const [language, setLanguage] = useState<Language>('english')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 flex flex-col">
          <div className='flex justify-center items-center gap-4'>
            <span className='relative w-20 h-20'>
              <Image src="/assets/logo.png" alt="Logo" layout='fill' objectFit="cover" />
            </span>
            <h1 className="text-3xl font-bold text-orange-600">केटली अमृततुल्य</h1>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <h3 className="text-2xl font-bold text-orange-800">Menu</h3>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow flex items-center hover:bg-orange-700 transition-colors"
              >
                {language.charAt(0).toUpperCase() + language.slice(1)}
                <FaChevronDown className="ml-2 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  {['hindi', 'english', 'marathi'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang as Language); toggleDropdown() }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 w-full text-left capitalize"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menu.map((item, index) => (
            <div key={index} className="bg-orange-100 rounded-lg shadow-md overflow-hidden flex flex-col p-4">


              <div className='flex gap-4'>
                <div className="relative w-28">
                  <Image
                    src={item.image}
                    alt={item.name[language]}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className=''>
                  {item.tags.length > 0 && (
                    <div className="flex ">
                      {item.tags.map((tag: string, index: number) => (
                        <span key={index} className="text-orange-600 font-semibold text-xs bg-white px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className='flex'>
                    <h2 className="text-lg font-semibold text-orange-800">{item.name[language]}</h2>
                  </div>

                  <p className="text-sm text-gray-600 ">{item.quantity}</p>
                  <div className="flex gap-2 items-center text-orange-800">
                    {item.off_price !== item.price && (
                      <span className="font-bold">₹{item.off_price}</span>
                    )}
                    <span className={`font-bold ${item.off_price !== item.price ? 'line-through text-gray-500' : ''}`}>
                      ₹{item.price}
                    </span>
                  </div>
                </div>

              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  )
}