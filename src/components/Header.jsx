import { Link, NavLink } from "react-router-dom";
import BtnLogin from "./BtnLogin";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    const [isLogged, setIsLogged] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const verificar_login = () => {
        setIsLogged(!isLogged);
    };

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PortalFilmes</span>
                    </Link>

                    {/* Hamburger Menu */}
                    <button
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                    >
                        <GiHamburgerMenu className="w-8 h-8" />
                    </button>

                    {/* Links */}
                    <div
                        className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            } md:opacity-100 md:max-h-screen`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col gap-1 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className="block py-2 px-3 text-white rounded" onClick={toggleMenu}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies' className="block py-2 px-3 text-white rounded" onClick={toggleMenu}>Encontrar Filmes</NavLink>
                            </li>
                            <li>
                                <NavLink to='/genres' className="block py-2 px-3 text-white rounded" onClick={toggleMenu}>Gêneros</NavLink>
                            </li>
                            <li>
                                <NavLink to='/mylist' className="block py-2 px-3 text-white rounded" onClick={toggleMenu}>Sua Lista</NavLink>
                            </li>
                            {isLogged && (
                                <li>
                                    <NavLink to='/config' className="block py-2 px-3 text-white rounded" onClick={toggleMenu}>Configuração</NavLink>
                                </li>
                            )}
                            <li>
                                <BtnLogin verificar={verificar_login} isLogged={isLogged} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
