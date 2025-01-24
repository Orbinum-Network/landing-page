import { useState } from 'react';
import logo from '@/assets/logo.png';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className="bg-secondary-900/70 border-secondary-800 backdrop-blur fixed z-50 w-full border-b"
            style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
        >

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://orbinum.net" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Orbinum Network Logo" />
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a
                        href="https://app.orbinum.net/"
                        className="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary-focus font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105"
                        style={{
                            boxShadow: '0 0px 10px rgba(155 155 155 / 50%), 0 2px 5px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        Get started
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-secondary-600 text-gray-400"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-secondary-700 rounded-lg bg-secondary-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a
                                href="https://docs.orbinum.net"
                                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-secondary-700 md:hover:bg-transparent md:hover:text-secondary-400"
                            >
                                Docs
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://orbinum.net/whitepaper.pdf"
                                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-secondary-700 md:hover:bg-transparent md:hover:text-secondary-400"
                            >
                                Whitepaper
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#faq"
                                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-secondary-700 md:hover:bg-transparent md:hover:text-secondary-400"
                            >
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#about"
                                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-secondary-700 md:hover:bg-transparent md:hover:text-secondary-400"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}