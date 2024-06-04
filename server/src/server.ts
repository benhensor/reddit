import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

const corsOptions = {
	origin: process.env.CLIENT_URL as string || 'http://localhost:3000',
	credentials: true,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(session({
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production', sameSite: 'lax'}
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// app.use('/login', authRoutes)
app.use('/auth', authRoutes)

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})