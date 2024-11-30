import * as React from 'react';
import { Link } from 'react-router-dom';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <div className="bg-slate-800">
            <div className="container p-2 mx-auto">
                <nav className="flex items-center justify-between py-2">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-white ml-5">
                        <Link to="/">urlShortner</Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6 mr-20	">
                        <Link
                            to="/about"
                            className="text-lg text-gray-200 hover:text-black hover:bg-sky-700 rounded-lg px-3 hover:font-semibold transition duration-300 "
                        >
                            About
                        </Link>
                        <Link
                            to="/blog"
                            className="text-lg text-gray-200 hover:text-black hover:bg-sky-700 rounded-lg px-3 hover:font-semibold transition duration-300"
                        >
                            Blog
                        </Link>
                        <Link
                            to="/contact"
                            className="text-lg text-gray-200 hover:text-black hover:bg-sky-700 rounded-lg px-3 hover:font-semibold transition duration-300"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/services"
                            className="text-lg text-gray-200 hover:text-black hover:bg-sky-700 rounded-lg px-3 hover:font-semibold transition duration-300"
                        >
                            Services
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="text-gray-200 focus:outline-none hover:text-white transition duration-300"
                            id="menu-btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div
                    id="menu"
                    className="hidden flex-col space-y-4 mt-4 text-center md:hidden bg-slate-700 p-4 rounded-md"
                >
                    <Link
                        to="/about"
                        className="text-lg text-gray-200 hover:text-white transition duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/blog"
                        className="text-lg text-gray-200 hover:text-white transition duration-300"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/contact"
                        className="text-lg text-gray-200 hover:text-white transition duration-300"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/services"
                        className="text-lg text-gray-200 hover:text-white transition duration-300"
                    >
                        Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
