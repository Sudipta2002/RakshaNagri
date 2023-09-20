import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import PostCard from "./PostCard";
import Radioo from "./Radio";
import Sliderr from "./Slider";
import './Body.css';
import Button from "@material-ui/core/Button";
import { lightGreen } from "@mui/material/colors";

const Body = ()=>{
    const [post,setPost]=useState([{
        "imageId":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icbFSdo97A4M/v1/800x-1.jpg",
        "title":"Gaand me Chaand ",
        "description":"Lorem Ipsumrfberersefsfsfeefsefsebefjerbfbjerfbjebfjreb",
        "category":"urban",
        "location":"Kolkata",
        "area":"Rajarhat",
        "status":"pending"
    },{
        "imageId":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icbFSdo97A4M/v1/800x-1.jpg",
        "title":"Gaand me Chaand ",
        "description":"Lorem Ipsumrfberersefsfsfeefsefsebefjerbfbjerfbjebfjreb",
        "category":"urban",
        "location":"Kolkata",
        "area":"Rajarhat",
        "status":"pending"
    },
    {"imageId":"https://assets.telegraphindia.com/telegraph/2020/Nov/1604950397_shutterstock_1436341607.jpg",
    "title":"Gaand me Chaand ",
    "description":"Lorem Ipsumrfberersefsfsfeefsefsebefjerbfbjerfbjebfjreb",
    "category":"urban",
    "location":"Kolkata",
    "area":"Rajarhat",
    "status":"pending"},{"imageId":"https://assets.telegraphindia.com/telegraph/2020/Nov/1604950397_shutterstock_1436341607.jpg",
    "title":"Gaand me Chaand ",
    "description":"Lorem Ipsumrfberersefsfsfeefsefsebefjerbfbjerfbjebfjreb",
    "category":"urban",
    "location":"Kolkata",
    "area":"Rajarhat",
    "status":"pending"}
]);
    
async function getPosts(){
        try {
            const data = await fetch();
            const json = await data.json();
            // setPost(json.?) .... to be continued
        } catch (error) {
            console.error(error);
        }
    }
    /*
        1. image
        2. title
        3. description
        4. category
        5. upvote/downvote 
        6. status  
    */
   
    return <div className="flex h-[745px]">
    <div className=" shadow-inner w-[75%] p-7 CardSection shadow-green-600  bg-black">
    
        <div className="flex-wrap"> 
            {post?.length==0?(<h1>No Post to filter</h1>):( 
            post.map((p) => {
                return(<Link to={"post/"}><PostCard {...p}/></Link>);
            })
            )}
      </div>     
    </div>

    <div className="w-[25%] p-8  shadow-inner shadow-green-600 rounded-lg  dark:bg-black">
        <h1 className="text-center font-serif font-bold text-2xl text-white">Filter Section</h1>
        <div className="bg-green-100 shadow-2xl rounded-2xl w-80 mt-9 shadow-green-500 ">
            <h1 className="text-center">Priority</h1>
            <Sliderr/>
        </div>
        <div className="bg-green-100 shadow-2xl rounded-2xl w-80 mt-9 shadow-green-500">
            <Radioo heading="Status"prob="Pending"probT="Completed"/> 
        </div>
        <div className="bg-green-100  shadow-2xl rounded-2xl  w-80 mt-9 shadow-green-500">
            <Dropdown/>
        </div>
        <div className="bg-green-100 shadow-2xl rounded-2xl w-80 mt-9 shadow-green-500">
            <Radioo heading="Category" prob="Urban"probT="Rural"/>
        </div>
        <div className="rounded-2xl flex justify-center w-80 mt-9 ">
            <Button variant="contained"sx={{color:lightGreen, border:"2px solid green"}} >Apply Filter</Button>
            {/* <button class="ring-2 ring-green-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ..."> */}
  {/* Apply
</button> */}

        </div>
    </div>
    </div>
}
export default Body;