import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = (file: any, folderName: string) => {
  try {
    return cloudinary.uploader.upload(file, {
      upload_preset: process.env.CLOUDINARY_PRESET,
      folder: folderName,
    });
  } catch (error) {
    console.log(error);
  }
};
