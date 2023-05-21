import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const uploadImage = async (file: any) => {
//   try {
//     const res = await cloudinary.uploader.upload(file, {
//       upload_preset: process.env.CLOUDINARY_PRESET,
//     });
//     console.log(res);
//     return;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default cloudinary;
