import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = () =>{
    
    let allPets = this.props.pets.map(currentPet => <Pet pet={currentPet} onAdoptPet={this.props.onAdoptPet} />)
    return allPets
  }

  render() {
    return <div className="ui cards">
      {this.renderPets()}
    </div>
  }
}

export default PetBrowser
