import React from 'react'
import moment from 'moment';
export default function PostDetail({post}) {
  return (
    <div className="bg-gray-700 shadow-lg rounded-lg  pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
            <img src={post.featuredImage.url} 
            alt={post.title}  className="object-top h-full w-full rounded-t-lg"/>
        </div>
        <div className="px-4 lg:px-0">
            <div className="flex items-center mb-8 w-full">
                    <div className="flex items-center  ml-2 mb-2 lg:mb-0 w-full lg:w-auto ">
                        <img className="w-10 h-10 rounded-full" src={post.author.photo.url} alt={post.author.name} />
                        <p className="px-2 text-sm cursor-pointer hover:underline hover:text-gray-400">{post.author.name}</p>
                    </div>
                    <div className="font-medium text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-400">
                            {moment(post.createdAt).format('MMMM DD YYYY')}
                        </span>
                    </div>
            </div>
        </div>
    </div>
  )
}
