import {v2 as cloudinary} from 'cloudinary'

const connectCloundinary = async ()=>{
    cloudinary.config({
        cloud_name : process.env.CLOUNINARY_CLOUD_NAME,
        api_key : process.env.CLOUNINARY_API_KEY,
        api_secret : process.env.CLOUNINARY_API_SECRET,
    });
};

export default connectCloundinary;
