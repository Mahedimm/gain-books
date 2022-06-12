import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
export default function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        getCategories()
        .then((result) => {setCategories(result)})
    },[])
    console.log(categories)
   
  return (
    <div className="bg-gray-700 shadow-lg rounded-md p-8 mb-8 ">
    <h3 className="font-bold uppercase text-xl mb-8 border-b-2 pb-4 border-gray-400">
        Categories
    </h3>
    {categories.map((category,index) =>  (
        <div key={index} className="flex items-center w-full mb-4"> 
            <div className='flex-grow ml-4 '>
                 <Link href={`/category/${category.slug}`} className="text-md font-semibold text-white" key={category.name}>
                    <a className="hover:text-pink-400 transition duration-100 text-xl font-bold">{category.name}</a>
                 </Link>
            </div>

        </div>
    ))}
</div>
  )
}
