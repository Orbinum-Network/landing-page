import { useState } from 'react';
import logo from '@/assets/logo.png'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://orbinum.net" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Orbinum Network Logo" />
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="https://app.orbinum.net/"
                        type="button"
                        className="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary-focus font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105"
                    >
                        Get started
                    </a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                        <li>
                            <a href="https://docs.orbinum.net" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-primary border-gray-100">Docs</a>
                        </li>
                        <li>
                            <a href="https://orbinum.net/whitepaper.pdf" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-primary border-gray-100">Whitepaper</a>
                        </li>
                        <li>
                            <a href="/#faq" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-primary border-gray-100">FAQs</a>
                        </li>
                        <li>
                            <a href="/#about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-primary border-gray-100">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}