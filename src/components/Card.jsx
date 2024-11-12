import React from 'react';
import Image from 'next/image';  // Import the Image component from next/image
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({ result }) {
  // Make sure you have the proper path for backdrop or poster image
  const imageUrl = result.backdrop_path 
    ? `https://www.themoviedb.org/t/p/original/${result.backdrop_path}` 
    : `https://www.themoviedb.org/t/p/original/${result.poster_path}`;

  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={imageUrl}
          alt={result.title || result.name} // Provide an alt text
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        />
        <div className='m-3'>
            <p className='line-clamp-2 text-sm'>{result.overview}</p>
            <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
            <p className='flex items-center'>
                {result.release_date || result.first_air_date}
                <FiThumbsUp className='h-5 mr-1 ml-3'/>
                {result.vote_count}
            </p>
        </div>
      </Link>
    </div>
  );
}
