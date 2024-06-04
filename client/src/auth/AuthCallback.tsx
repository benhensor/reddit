import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const AuthCallback: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('Redirected from Reddit')
    const handleAuth = async () => {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')
      console.log('Received code', code)

      if (code) {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/callback?code=${code}`, {
            credentials: 'include' // Ensure cookies are included in the request
          });
          if (!response.ok) {
            throw new Error('Failed to fetch token');
          }
          const data = await response.json()
          Cookies.set('token', data.access_token, { secure: true, sameSite: 'strict' })
          navigate('/')
        } catch (error) {
          console.error('AuthCallBack - Error fetching token', error)
          setError('Failed to authenticate')
        }
      } else {
        setError('Authorization code not found')
      }
    }

    handleAuth()
  }, [dispatch, navigate])

  return <Loading>{error ? <p>{error}</p> : <p>Authenticating...</p>}</Loading>
}

export default AuthCallback

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textParapraph};
  font-family: 'Roboto', sans-serif;
`