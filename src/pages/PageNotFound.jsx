import imgError from '../assets/404error.svg'

function PageNotFound() {
  return (
    <div className='min-h-scren flex justify-center items-center bg-cyan-800'>
      <img src={imgError} alt="Imagem de Erro" width={800} />
    </div>
  );
}

export default PageNotFound;
