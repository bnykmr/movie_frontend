import React from 'react'
import { useLocation } from 'react-router';
import { useGetMovieIdQuery } from '../features/MovieSlice';

const Details = () => {

  const { state } = useLocation();


  const { data, isLoading } = useGetMovieIdQuery(state.movieId);
  return (
    <div >
      {data && <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${state.poster_path}')`, backgroundRepeat: 'no-repeat' }} className='w-full min-h-screen absolute top-0 bg-cover '>
        <iframe src={`https://www.youtube.com/embed/${data.results[0]?.key}?`} allowFullScreen className=' w-[60%]  aspect-video m-5 rounded-3xl ml-auto mr-auto mt-24'></iframe>
      </div>}
    </div>
  )
}

export default Details
