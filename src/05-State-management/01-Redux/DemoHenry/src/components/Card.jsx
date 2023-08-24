import React from 'react'

class Card extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
      <div className='flex justify-center'>
          <p>ID: {this.props.id}</p>
          <p>Name: {this.props.name}</p>
          <p>Status: {this.props.status}</p>
          <hr />
      </div>
      )
  }
}

export default Card