import React from 'react'

class Pet extends React.Component {
  renderButtons = () => {
    let adopted = this.props.pet.isAdopted
    if (adopted === true){
      return(
      <button className="ui disabled button">Already adopted</button>
      )  
    }
    else{      
      return(
        <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
      )
    }
  }
  
  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  gender = () => {
    if (this.props.pet.gender === 'female'){
      return '♀' 
    }
    return '♂' 
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButtons()}
        </div>
      </div>
    )
  }
}

export default Pet
