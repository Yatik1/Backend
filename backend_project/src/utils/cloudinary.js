import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET 
});

// cloudinary.config({ 
//     cloud_name: 'dxzacmrj0', 
//     api_key: '154635499739836', 
//     api_secret: "rzpxJEWA49donLF8hXCMG4UCkUU" 
//   });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        // upload file on cloudinary
        const response =  await cloudinary.uploader.upload(localFilePath , {
            resource_type:'auto'
        })
        console.log("file is uploaded on cloudinary" , response.url);
        fs.unlinkSync(localFilePath) 
        return response;
    } catch (error) {
         fs.unlinkSync(localFilePath) 
         console.log(error); // remove the locally saved temporary file as the upload operation got failed
         return null;
    }
}

export {uploadOnCloudinary}