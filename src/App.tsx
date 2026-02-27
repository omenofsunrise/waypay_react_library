import './App.css'
import AuthPage from './lib/pages/AuthPage'

function App() {
  return (
    <AuthPage onLoginSuccess={function (token: string): void {
        throw new Error('Function not implemented.')
      } } />
  )
}

export default App
