import React, {useEffect, useState} from 'react'
import moment from 'moment'
import Link from 'next/link';
import { getRecentPosts,getSimilarPosts } from '../services';
export default function PostWidget({categories,slug}) {
    const [relatedPosts, setRelatedPosts] = useState([]);
    useEffect(() => {
        if(slug){
            getSimilarPosts(categories,slug)
            .then((result) => {setRelatedPosts(result)})
        } else {
            getRecentPosts()
            .then((result) => {setRelatedPosts(result)})
        }
    },[slug])
    // console.log(relatedPosts)
  return (
    <div className="bg-gray-700 shadow-lg rounded-md p-8 mb-8 ">
        <h3 className="font-bold uppercase text-xl mb-8 border-b-2 pb-4 border-gray-400">
            {slug ? 'Similar Posts' : 'Recent Posts'}
        </h3>
        {relatedPosts.map((post,index) =>  (
            <div key={post.title} className="flex items-center w-full mb-4">
                <div className="w-16 flex-none">
                    <img src={post.featuredImage.url} alt={post.title}
                    height="60px" width="60px"
                     className="rounded-full align-middle "
                    />
                </div>
                <div className='flex-grow ml-4 '>
                   <p className="text-gray-400 text-xs ">
                       {moment(post.createdAt).format('MMMM DD YYYY')}
                   </p>
                     <Link href={`/post/${post.slug}`} className="text-md font-semibold text-white" key={post.title}>
                        <a className="hover:text-pink-400 transition duration-100">{post.title}</a>
                     </Link>
                </div>

            </div>
        ))}
    </div>
  )
}
