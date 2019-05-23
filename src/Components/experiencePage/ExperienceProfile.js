import React, { Component }from "react"
import "./experence.css"
import auth from "../../token/token"

class ExperienceProfie extends React.Component {
    constructor() {
        super();
        this.state = {
            user_id: null,
            title: "",
            description: "",
            location: "",
        }

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }




    postExperience = input => {
        // input=this.state
        console.log('My params are', input)
        auth().post(`https://wanderlust-1.herokuapp.com/user/trip`, input)
            .then(res => { console.log(res) })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.postExperience(this.state);
        console.log("This form was submitted with following data");
        console.log(this.state)
    }
    componentDidMount() {
        const id = Number(localStorage.getItem("userId"))

        this.setState({ user_id: id })


    }




    render() {
        return (
            <div className="profilecomponent">
                <div>
                    <div className='travel-logo'>
                        <i id='map' className="fas fa-map"></i>
                        <h3 className='title-text'><span>WanderLust</span> ...Traveling made easy</h3>
                    </div> {/* travel-logo end */}
                </div>
                <div>
                    <form className="description" onSubmit={this.handleSubmit}>
                        <h1>Fill free to add your Tour Experence</h1>
                        <div>
                            <span className="index2">Title : </span>
                            <input className="index" type="text" id="title" placeholder="Enter Title" name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div>
                            <span className="index2">Location : </span>
                            <input className="index"  type="text" id="name" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange} />
                        </div>
                        <div>
                            <span className="index2">Description : </span>
                            <input className="index" type="text" id="name" placeholder="...Enter Tour Experience" name="description" value={this.state.description} onChange={this.handleChange} />
                        </div>
                        <button className="button1" type="submit">Add Experience</button>
                    </form>
                </div>

            </div>
        )
    }

}

export default ExperienceProfie