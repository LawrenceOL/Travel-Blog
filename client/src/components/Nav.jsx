
import { Link } from 'react-router-dom'

const Nav = () => {


  return (
    <header className='nav'>
      <h2 className='blog-name'>Travel Blog</h2>
      <nav>
        <Link to='/' className='glow-effect'>Home</Link>
        <Link to='/about' className='glow-effect'>About</Link>        
      </nav>
    </header>
  )
}

export default Nav
