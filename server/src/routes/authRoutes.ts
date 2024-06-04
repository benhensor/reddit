import { Router } from 'express'
import { authenticate } from '../middleware/authMiddleware'
import { getRedditToken, redirectToReddit } from '../controllers/authController'

const router = Router()

router.get('/login', redirectToReddit)
router.get('/callback', authenticate, getRedditToken)

export default router