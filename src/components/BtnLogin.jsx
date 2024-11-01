export default function BtnLogin({verificar, isLogged}) {
    
    return ( 
        <>
        <div className="flex gap-4 items-center">
            {/* {isLogged && <p className="text-white font-semibold">Ola, usuario!</p>} */}
            <button onClick={verificar} className="w-full bg-white text-cyan-950 border border-1 py-2 px-3 rounded">{isLogged ? 'Loggout' : 'Login'}</button>
        </div>
        </>
     );
}
