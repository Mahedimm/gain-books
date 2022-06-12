import React from 'react'
import moment from 'moment';
export default function PostDetail({post}) {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
        switch (type) {
            case 'heading-three':
              return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
              return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
              return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
              return (
                <img
                  key={index}
                  alt={obj.title}
                  height={obj.height}
                  width={obj.width}
                  src={obj.src}
                />
              );
            default:
              return modifiedText;
          }
    }
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
            <h1 className="mb-8 text-3xl font-semibold text-center border-4 p-2 border-gray-500 rounded-md text-pink-500">{post.title}</h1>
            {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
    </div>
  )
}
