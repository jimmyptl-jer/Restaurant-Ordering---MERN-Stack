import express from 'express';
import { getMenu, newMenuItem } from '../controller/menuController.js';


// Create an Express.js router instance
const router = express.Router();

// Define the routes and associate them with the corresponding controller functions

router.post('/',newMenuItem);
router.get('/',getMenu)


// Export the router to be used in your main application
export default router;
