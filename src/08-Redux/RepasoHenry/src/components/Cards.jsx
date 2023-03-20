import Card from './Card'


const Cards = (props) => {
  return (
    <div>
        <div>
            { 
                props.users.map((user) => {
                    return <Card 
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        mail={user.email}
                    />
                })
            }
        </div>
    </div>
  )
}

export default Cards