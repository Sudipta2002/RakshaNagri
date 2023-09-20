import React from 'react'
import ProfileClass from './ProfileClass'
import PostAddIcon from '@mui/icons-material/PostAdd';
import BarChartIcon from '@mui/icons-material/BarChart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
const MyAccount = () => {
  return (
    <div className='flex flex-col mt-6'>
      <div className='justify-center flex w-[100%]'>
        <ProfileClass/>
      </div>
      <div className=' w-[100%]'>
        <div className='justify-center w-[100%] space-x-36 flex bg-green-200 rounded-full mt-6 '>
          <div>
            <PostAddIcon fontSize='large'/>
            <p>Posts</p>
            <h1 className="text-4xl "	>25</h1>
          </div>
          <div> 
            <ThumbUpIcon fontSize='large'/>
            <p>Likes</p>
            <h1 className="text-4xl "	>25</h1>
          </div>
          <div> 
            <ThumbDownAltIcon fontSize='large'/>
            <p>DisLikes</p>
            <h1 className="text-4xl "	>25</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount