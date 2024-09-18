import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="py-6 flex justify-around text-white bg-cyan-950 font-semibold text-lg drop-shadow-xl">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-7">
                        <li className="duration-300 hover:scale-110"><NavLink to='/' >Home</NavLink></li>
                        <li className="duration-300 hover:scale-110"><NavLink to='/movies' >Filmes</NavLink></li>
                        <li className="duration-300 hover:scale-110"><NavLink to='/genres' >Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}