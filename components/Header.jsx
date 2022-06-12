import React,{useState,useEffect} from 'react'
import { getCategories } from '../services';
import Link from 'next/link';
export default function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
      getCategories()
      .then((result) => {setCategories(result)})
  },[])
  console.log(categories)
  return (
    <div className="border-b-2 border-gray-600  sticky w-full py-5 text-white ">
      <div className="container mx-auto px-10 w-full mb-5 ">
        <div className="md:float-left block ">
             <Link href="/">
                  <span className="cursor-pointer text-xl font-black tracking-tight ">Gain Books</span>
             </Link>
        </div>
        <div className="hidden md:float-left md:contents"> 
            {categories.map((category,index) =>  (
              <Link href={`/category/${category.slug}`} key={category.slug}>
                <span className="cursor-pointer text-sm font-semibold hover:text-pink-600 transition duration-100 tracking-tight ml-4 md:float-right" >{category.name}</span>
              </Link>
            ))}
        </div>
        
      </div>
    </div>
  )
}
