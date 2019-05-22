import React from "react"
import "./experence.css"

class ExperienceProfie extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"",
            description:"",
            location:""
        }

    }

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        this.setState({ [name]: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        console.log("This form was submitted with following data");
        console.log(this.state)
    }


  render(){
      return(
          <div className="profilecomponent">
              <form className="description" onSubmit={this.handleSubmit}>
                   <input type="text" id="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} />
                  <input type="text"  id="name" placeholder="Enter Description" name="description"  value={this.state.description} onChange={this.handleChange}/>
                  <input type="text" id="name" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange} />
                  <button type="submit">Add Experience</button>
              </form>

          </div>
      )
  }  

}

export default ExperienceProfie