import Cards from './Cards'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getUsers } from '../redux/actions'

const Home = () => {
  const users = useSelector(state => state.users)
  const myUsers = useSelector(state => state.myUsers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])


  return (
    <div>
        <h1>Home</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat enim autem laboriosam sint unde quas rerum vel veritatis mollitia consectetur facere aliquam ea odit amet nostrum sunt, veniam qui! Consequatur?</p>
        <hr />

        <Cards users= {[...users, ...myUsers]} />
    </div>
  )
}

export default Home