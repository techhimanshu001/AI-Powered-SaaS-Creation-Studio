import express from "express";
import { generateArticle, generateBlogTitle, generateImage, reomveImageBackground, reomveImageObject, resumeReview } from "../controllers/aiController.js";
import { auth } from "../middlewares/auth.js";
import { upload } from "../configs/multer.js";

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, generateArticle)
aiRouter.post('/generate-blog-title', auth, generateBlogTitle)
aiRouter.post('/generate-image', auth, generateImage)
aiRouter.post('/remove-image-background', auth, upload.single('image'), reomveImageBackground);
aiRouter.post('/remove-image-object', auth, upload.single('image'), reomveImageObject);
aiRouter.post('/resume-review', auth, upload.single('resume'), resumeReview);


export default aiRouter