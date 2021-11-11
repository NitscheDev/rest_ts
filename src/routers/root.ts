import { Router } from "express";
const router = Router();

import { root, privateRoute } from '../controllers/root.controller'
import { protect } from '../middleweres/protect';

router.get('/', root);
router.get('/protected', protect, privateRoute);

export default router;