import { useState } from 'react';
import logo from '@/assets/logo.png';
import { Link } from 'react-router';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='fixed z-50 w-full'>
            <nav
                className="bg-secondary-900/70 border-secondary-800 backdrop-blur border-b"
                style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
            >

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Orbinum Network Logo" />
                    </Link>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link
                            to="https://app.orbinum.net/"
                            className="drop-shadow-2xl rounded-md border border-primary px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-md bg-white/10 transition-colors duration-300 hover:bg-primary/20"
                        >
                            Get started
                        </Link>
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
                                <Link
                                    to="https://docs.orbinum.net"
                                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-secondary-700 md:hover:bg-transparent md:hover:text-secondary-400"
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/roadmap"
                                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-secondary-700 md:hover:bg-transparent md:hover:text-secondary-400"
                                >
                                    Roadmap
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers"
                                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-secondary-700 md:hover:bg-transparent md:hover:text-secondary-400"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://orbinumnetwork.medium.com/"
                                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-secondary-700 md:hover:bg-transparent md:hover:text-secondary-400"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}