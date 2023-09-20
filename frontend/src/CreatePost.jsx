import React, { useEffect, useState } from "react";
import axios from "axios";
import Radioo from "./Radio.jsx";
import Button from "@material-ui/core/Button";
import Dropdown from "./Dropdown.jsx";

const CreatePost = () => {
  const [formState, setFormState] = useState({ title: "", description: "",kind:"",category:"",latitude:"",longitude:"",area:"",status:""});
  const [updateLocation,setUpdateLocation]=useState(false);
  const [pic,setPic]=useState();
  // const[title,setTitle]=useState();
  const[description,setDescription]=useState();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "imageFile") {
      const imageFile = event.target.files[0];
      setFormState((prevState) => ({ ...prevState, imageFile }));
    } else {
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("dsf");
    const formData = new FormData();
    // console.log(formState.kind);
    // formData.append("title", formState.title.toString());
    // formData.append("description", formState.description.toString());
    // formData.append("imageFile", formState.imageFile);
    // formData.append("location", formState.location);
    // formData.append("category", formState.category);
    // formData.append("area", formState.area);
    // formData.append("status", formState.status);
    // console.log(formData);
    let title="";
    let description="";
    try {
      console.log({title: formState.title, description: formState.description});
      const response = await axios.post("http://localhost:5000/api/v1/tickit", {title: formState.title, description: formState.description});
      console.log(response.data);
      // console.log(formData);
    } catch (error) {
      console.error(error);
    }

  };
  const postDetails=(pics)=>{
    //https://api.cloudinary.com/v1_1/leetcode/    base api
    // setLoading(true);
    // if(pics===undefined){
    //   toast({
    //     title: 'Please Select an Image!',
    //     status: 'warning',
    //     duration: 5000,
    //     isClosable: true,
    //     position:"bottom",
    //   });  
    //   return;  
    // }
    if(pics.type==="image/jpeg" || pics.type==="image/png"){
      const data= new FormData();
      data.append("file",pics);
      data.append("upload_preset","chat-shala");

      data.append("cloud_name","leetcode");
      fetch("https://api.cloudinary.com/v1_1/leetcode/image/upload",{
        method:'post',
        body: data,
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setPic(data.url.toString());
        // setLoading(false);
      }).catch((err)=>{
        console.log(err);
        // setLoading(false);
      });
    }else{
      // toast({
      //   title: 'Please Select an Image!',
      //   status: 'warning',
      //   duration: 5000,
      //   isClosable: true,
      //   position:"bottom",
      // });  
      // setLoading(false);
      console.log("eerrrr");
      return;
    }
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const location = `(${latitude}, ${longitude})`;
        console.log(location);
        setFormState((prevState) => ({ ...prevState, location }));
        setUpdateLocation(true);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    // handleLocationClick();
  }, []);
  return (
    <div className="bg-gray-100  flex flex-col items-center justify-center">
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
    >
      <Button variant="contained" color="primary" onClick={handleLocationClick}>
      {updateLocation==true? (`Location Updated`):(`Update Location`)}
    </Button>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          name="title"
          type="text"
          placeholder="Enter title"
          value={formState.title}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          placeholder="Enter description"
          value={formState.description}
          onChange={handleInputChange}
          required
        />
      </div> 
      <div className="mb-4">
        <Dropdown formState={formState} setFormState={setFormState}/>
      </div> 
      <div className="mb-4">
        <Radioo heading="Category" prob="Urban"probT="Rural"/>
      </div> 
      
      <div className="mb-4">
        <Radioo heading="Status"prob="Pending"probT="Completed"/> 
      </div> 
      <div className="mb-4">
        <Radioo heading="Area" prob="Kolkata"probT="Outside Kolkata"/> 
      </div> 

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="imageFile">
          Image
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="imageFile"
          name="imageFile"
          type="file"
          onChange={(e)=>{postDetails(e.target.files[0])}}
          // required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default CreatePost