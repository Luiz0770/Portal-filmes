import { Link, NavLink } from "react-router-dom";
import BtnLogin from "./BtnLogin";
import { useState } from "react";


export default function Header(){
    
    const[isLogged, SetIsLogged] = useState(false)
    
    const verificar_login = () => {
        SetIsLogged(!isLogged)
    }

    return(
        <>
            <header className="py-6 flex justify-around text-white bg-cyan-950 font-semibold text-lg drop-shadow-xl">
                <div>
                    <Link to='/'>Portal Filmes</Link>
                </div>
                <nav>
                    <ul className="flex gap-7">
                        <li className="duration-300 hover:scale-110"><NavLink to='/' >Home</NavLink></li>
                        <li className="duration-300 hover:scale-110"><NavLink to='/movies' >Filmes</NavLink></li>
                        <li className="duration-300 hover:scale-110"><NavLink to='/genres' >Gêneros</NavLink></li>
                        <li className="duration-300 hover:scale-110"><NavLink to='/mylist' >Sua Lista</NavLink></li>
                        {isLogged && 
                        <li className="duration-300 hover:scale-110"><NavLink to='/config' >Configuração</NavLink></li>
                        }
                    </ul>
                </nav>
                <BtnLogin verificar={verificar_login} isLogged={isLogged}/>
            </header>
        </>
    )
}