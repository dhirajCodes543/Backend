import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

const uploadOnClodinary = async (localFilePath)=>{
    try {
        if (!localFilePath)return null ;
        const responce = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded on cloudinary",responce.url);
        return responce
    } catch (error) {
        fs.unlinkSync(localFilePath)
    }
}


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


export {uploadOnClodinary}