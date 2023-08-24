import { navigate } from "react-router-dom"

const Dashboard = () => {

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
      Dashboard
      <button onClick={handleClick}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard