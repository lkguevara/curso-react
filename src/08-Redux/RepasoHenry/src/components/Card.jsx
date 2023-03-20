import { Link } from 'react-router-dom'

const Card = (props) => {
    const { id, name, mail } = props
    return (
        <div>
            <hr />
            <Link to={`/detail/${id}`}>
                <h4>{name}</h4>
            </Link>
            <p>Email: {mail}</p>
            <hr />
           
        </div>
    )
}

export default Card
