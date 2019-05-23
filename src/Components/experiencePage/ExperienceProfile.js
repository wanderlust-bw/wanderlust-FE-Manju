import React from "react"
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
        // let target = e.target;
        // let name = target.name;
        this.setState({ [name]: value })
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log("This form was submitted with following data");
    //     console.log(this.state)
    // }


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
                        <div>
                            <span>Title : </span>
                            <input className="index" type="text" id="title" placeholder="Enter Title" name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div>
                            <span>Location : </span>
                            <input className="index1" type="text" id="name" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange} />
                        </div>
                        <div>
                            <span>Description : </span>
                            <input type="text" id="name" placeholder="...Enter Description" name="description" value={this.state.description} onChange={this.handleChange} />
                        </div>
                        <button type="submit">Add Experience</button>
                    </form>
                </div>

            </div>
        )
    }

}

export default ExperienceProfie