import React from 'react'
import { useNavigate } from 'react-router'
import { useGetMoviesCategoryQuery } from '../features/MovieSlice';
import Main from './Main';

const Home = () => {
  const nav = useNavigate();

  return (
    <div>
      <Main />
    </div>
  )
}

export default Home
