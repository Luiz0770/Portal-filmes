export default function CastCard({ ator }) {
    return (
      <div
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <img
          className="rounded-t-lg w-full object-cover"
          src={`https://image.tmdb.org/t/p/w300${ator.profile_path}`}
          alt={ator.name}
        />
        <div className="p-4">
          <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {ator.name}
          </h5>
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
            {ator.character}
          </p>
        </div>
      </div>
    );
  }
  