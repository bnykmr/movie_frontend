import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useGetMoviesCategoryQuery, useGetSearchMoviesQuery } from '../features/MovieSlice'

const Search = () => {
  const { state } = useLocation();
  const nav = useNavigate();

  const { data, isLoading } = useGetSearchMoviesQuery(state.searchText);


  if (isLoading) {
    return <div className='text-2xl flex justify-center mt-56'>
      <h1>Loading.....</h1>
    </div>
  }
  if (data && data.results.length === 0) {
    return <h1 className='m-16 text-2xl text-pink-500 tracking-wider'>Try Using Another Keyword</h1>
  }

  return (
    <div className='p-5 grid grid-cols-4 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      {data && data.results.map((movie) => {
        return <div onClick={() => nav('/movie/detail', { state: { movieId: movie.id } })} key={movie.id} className='shadow-xl hover:scale-105 ease-in duration-300 cursor-pointer text-justify  '>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} className='w-full h-[400px] object-fil rounded-3xl'></img>
          <div className='p-4 space-y-3'>
            <h1 className='text-xl font-semibold'>{movie.title}</h1>
            <p>{movie.release_date}</p>
            <p >{movie.overview}</p>



          </div>
        </div>
      })}
    </div>
  )
}

export default Search
