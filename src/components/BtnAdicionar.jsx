export default function BtnAdicionar({ funcao, color }) {
  const colorClasses = {
    "red-800": "stroke-red-800 group-hover:stroke-red-900 group-active:stroke-red-950",
    "zinc-400": "stroke-zinc-400 group-hover:stroke-zinc-500 group-active:stroke-zinc-600",
  };

  return (
    <button
      title="Adicionar Favorito"
      className="group cursor-pointer outline-none hover:rotate-90 duration-300 mt-5"
      onClick={() => funcao()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        className={`fill-none duration-300 ${colorClasses[color]}`}
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          strokeWidth={1.5}
        />
        <path d="M8 12H16" strokeWidth={1.5} />
        <path d="M12 16V8" strokeWidth={1.5} />
      </svg>
    </button>
  );
}
