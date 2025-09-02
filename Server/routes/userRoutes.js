import express from "express";
import { getPublishedCreations, getUserCreations, toggleLikereations } from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";

const userRouter  = express.Router();

userRouter.get('/get-user-creations' , auth , getUserCreations)
userRouter.get('/get-published-creations' , auth , getPublishedCreations)
userRouter.post('/get-like-creations' , auth , toggleLikereations)


export default userRouter;
