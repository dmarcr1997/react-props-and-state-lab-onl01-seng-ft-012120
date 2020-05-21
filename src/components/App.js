import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  setPetData = data => {
    this.setState({
      pets: data
    })
  }

  onChangeType = newType => {
    this.setState({
      filters:{
        type: newType
      }
    })
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    if (type === 'all'){
      fetch('/api/pets').then(response => response.json()).then(data => this.setPetData(data))
   
    }

    else if (type === 'cat'){
      fetch('/api/pets?type=cat').then(response => response.json()).then(data => this.setPetData(data))
   
    }

    else if (type === 'dog'){
      fetch('/api/pets?type=dog').then(response => response.json()).then(data => this.setPetData(data))
   
    }

    else{
      fetch('/api/pets?type=micropig').then(response => response.json()).then(data => this.setPetData(data)).catch(error => console.log(error.message))
   
    }
  }

  onAdoptPet = (id) =>{
  let allPets = this.state.pets
  let updatedPets = this.state.pets.map(pet => {
    if(pet.id === id){
      pet.isAdopted = !pet.isAdopted
    }
    return pet})
    
   this.setState({
     pets: updatedPets
   })
   
  }
 
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
