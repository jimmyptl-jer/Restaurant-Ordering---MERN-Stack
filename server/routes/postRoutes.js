import express from 'express';
import { getPost, newPost } from '../controller/postController.js';


// Create an Express.js router instance
const router = express.Router();

// Define the routes and associate them with the corresponding controller functions

router.post('/',newPost);
router.get('/',getPost)


// Export the router to be used in your main application
export default router;
