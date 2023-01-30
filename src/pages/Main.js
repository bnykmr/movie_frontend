import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { changeShow, useGetMoviesCategoryQuery } from '../features/MovieSlice'

const Main = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { isLoading, data, isError, error } = useGetMoviesCategoryQuery(category ?? 'popular');
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (isLoading) {
    return <div>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_tmnc73b6.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  };



  return (
    <div className='p-5 grid grid-cols-4 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      {data && data.results.map((movie) => {
        return <div onMouseLeave={() => { dispatch(changeShow(false)); }} onMouseEnter={() => { dispatch(changeShow(true)) }} onClick={() => nav('/movie/detail', { state: { movieId: movie.id, poster_path: movie.poster_path } })} key={movie.id} className='shadow-xl hover:scale-105 ease-in duration-300 cursor-pointer text-justify rounded-3xl'>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} className='w-full h-[400px] object-fill rounded-3xl'></img>
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

export default Main
