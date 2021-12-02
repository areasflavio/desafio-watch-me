import { MovieCard } from './MovieCard';

import { GenreResponseProps, MovieProps } from '../App';

interface ContentProps {
  genre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ genre, movies }: ContentProps) {
  return (
    <>
      <header>
        <span className="category">
          Categoria:<span> {genre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </>
  );
}
