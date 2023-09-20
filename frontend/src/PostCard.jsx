import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
const PostCard = (
    {imageId,title,description,status,category,location,area}) => {
  return (
    <div className="w-100% p-5 m-5 rounded-2xl flex  shadow-md shadow-green-500	bg-green-300 ">
        <div className='h-[255] w-96 rounded-2xl '>
            <img className='h-[255] rounded-2xl w-max' src={imageId}/>
        </div>
        <div className='p-10 bg-green-900 text-white from-neutral-100 rounded-2xl ml-10 shadow-sm'>
            <h1>Title- {title}</h1>
            <h1>Description- {description}</h1>
            <h1> Category-{category}</h1>
            <h1>Status- {status}</h1>
            <h1>Location-{location}</h1>
            <h1>Area-{area}</h1>
            <ThumbUpOffAltIcon className='ml-96 '/>
            <ThumbDownOffAltIcon className='ml-6'/>
        </div>
    </div>
  )
}

export default PostCard