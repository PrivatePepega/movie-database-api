import express from 'express';
import { addToWatchList } from '../controller/watchListController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { addToWatchlistSchema } from '../validators/watchlistValidators.js';

const router = express.Router();

router.use(authMiddleware);

router.post("/", validateRequest(addToWatchlistSchema) ,addToWatchList);

router.delete("/:id");

export default router;


