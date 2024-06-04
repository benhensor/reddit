import { Request, Response } from 'express'
import axios from 'axios'
import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config()

declare module 'express-session' {
	interface SessionData {
		state: string
	}
}

const clientId = process.env.REDDIT_CLIENT_ID!
const clientSecret = process.env.REDDIT_CLIENT_SECRET!
const redirectUri = process.env.REDDIT_REDIRECT_URI!;
const clientUrl = process.env.CLIENT_URL!;

export const redirectToReddit = (req: Request, res: Response) => {
  console.log('Redirecting to Reddit...');
	const state = crypto.randomBytes(20).toString('hex');
	req.session.state = state
  const scope = 'identity';
	const redditAuthUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=${state}&redirect_uri=${redirectUri}&duration=temporary&scope=${scope}`;
	res.redirect(redditAuthUrl)
  console.log('authController - State sent:', state);
}

export const getRedditToken = async (req: Request, res: Response) => {
	const { code } = req.query
  console.log('authController - Received code:', code);

	if (!code) {
    console.log('Missing code or state:', { code });
		return res
			.status(400)
			.json({ error: 'Authorization code and state are required' })
	}

	try {
		const response = await axios.post(
			'https://www.reddit.com/api/v1/access_token',
			new URLSearchParams({
				grant_type: 'authorization_code',
				code: code as string,
				redirect_uri: redirectUri,
			}),
			{
				auth: {
					
					username: clientId,
					password: clientSecret,
				},
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		)

		const { access_token } = response.data
    console.log('authController - Received access_token:', access_token);

		res.cookie('token', access_token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
		})

		res.status(200).json({ access_token })
		// res.redirect(clientUrl)
	} catch (error) {
    console.error('authController - Error fetching Reddit token:', error);
		if (axios.isAxiosError(error)) {
			res.status(500).json({ error: error.message })
		} else {
			res.status(500).json({ error: String(error) })
		}
	}
}
