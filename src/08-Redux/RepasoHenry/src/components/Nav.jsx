import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{ display:'flex', justifyContent: 'center', fontSize: '20px' }}>
        <Link to='/' style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}>
            <p>Home</p>
        </Link>

        <Link to='/about' style={{ marginRight: '10px',  textDecoration: 'none', color: 'black' }}>
            <p>About</p>
        </Link>

        <Link to='/form' style={{ marginRight: '10px',  textDecoration: 'none', color: 'black' }}> 
            <p>Form</p>
        </Link>
   </div>
  )
}

export default Nav