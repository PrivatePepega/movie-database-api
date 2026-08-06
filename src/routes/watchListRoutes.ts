import express from 'express';
import { addToWatchList } from '../controller/watchListController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post("/", addToWatchList);

router.delete("/:id");

export default router;


