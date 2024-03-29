import './App.css'
import { useContext } from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import ProductList from './components/productList/ProductList'
import Technologies from './components/technology/Technology'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <div className='container'>
        <Toggle />
        <Intro />
        <About />
        <Technologies />
        <ProductList />
        <Contact />
      </div>
    </div>
  )
}

export default App
