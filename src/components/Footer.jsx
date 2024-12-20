import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PortalFilmes</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link to="/movies" className="hover:underline me-4 md:me-6">Encontrar Filmes</Link>
            </li>
            <li>
              <Link to="/genres" className="hover:underline me-4 md:me-6">Gêneros</Link>
            </li>
            <li>
              <Link to="/mylist" className="hover:underline">Sua Lista</Link>
            </li>
          </ul>
        </div>
        {/* Linha Divisoria */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center">© Site desenvolvido por Luiz Felipe!</span>
      </div>
    </footer>


  );
}
