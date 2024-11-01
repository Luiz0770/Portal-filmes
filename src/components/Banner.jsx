export default function Banner() {
  return (
    <>
      <div className="h-96 flex justify-center items-center bg-gray-900 text-white">
        <h1 className="font-semibold text-4xl">Seja Bem-vindo!</h1>
      </div>
      {/* SVG WAVES */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#111827"
          fillOpacity="1"
          d="M0,288L120,272C240,256,480,224,720,224C960,224,1200,256,1320,272L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

