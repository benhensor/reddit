import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import PublicHome from './pages/PublicHome'
import Home from './pages/Home'
import SubReddits from './components/SubReddits/SubReddits'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import { GlobalStyles } from './styles/GlobalStyles'
import AuthCallback from './auth/AuthCallback'
import ProtectedRoute from './auth/ProtectedRoute'

const App: React.FC = () => {
	const [currentTheme, setCurrentTheme] = useState(theme.lightTheme)

	const toggleTheme = () => {
		setCurrentTheme(
			currentTheme === theme.lightTheme
				? theme.darkTheme
				: theme.lightTheme
		)
	}

	return (
		<Router>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyles />
				<Header onClick={toggleTheme} />
				<main>
					<Routes>
						<Route
							path="/auth/callback"
							element={<AuthCallback />}
						/>
						<Route 
              path="/login" 
              element={<Home />} 
            />
						<Route
							path="/"
							element={<ProtectedRoute><Home /></ProtectedRoute>}
						/>
						<Route 
              path="/public" 
              element={<PublicHome />} 
            />
					</Routes>
				</main>
				<aside>
					<SubReddits />
				</aside>
			</ThemeProvider>
		</Router>
	)
}

export default App
