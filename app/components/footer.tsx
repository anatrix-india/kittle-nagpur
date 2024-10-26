import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="w-full py-6 bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold mb-4 text-black">Connect With Us</h2>
                <div className="flex space-x-4 mb-6">
                    <a
                        href="mailto:anatrix.in@gmail.com"
                        className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                        aria-label="Email us"
                    >
                        <MdOutlineEmail className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/your_instagram_handle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                        aria-label="Follow us on Instagram"
                    >
                        <FaInstagram className="h-6 w-6" />
                    </a>
                </div>
                <p className="text-sm text-gray-600 text-center">
                    Nagpur ka apna – केटली crafted with love ❤️ by Anatrix for tea lovers.
                </p>
            </div>
        </footer>
    )
}