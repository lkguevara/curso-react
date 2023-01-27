import { useEffect } from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link 
        to="/about"
      >
        <button>Go to About</button>
      </Link>
    </div>
  )
}

export default Home