import React from "react"
import "./Profile.css"
import {Link} from "react-router-dom"


class ProfilePage extends React.Component {

    constructor() {
        super();
        this.state = {
            bio: "",
            name: "",
            email: "",
            location: "",
            file: '',
            imagePreviewUrl: '',
            saved: false,
            file:null
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
        this.setState({ saved: true })
    }

    handleImageChange = e => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

     uploadImage = e => {
        file: URL.createObjectURL(event.target.files[0])
     }




    render() {
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img value={this.state.file}  name="img" src={imagePreviewUrl} />);
        } else {
            imagePreview = (<div className="previewText">Please <br/>select <br/>an Image <br/>for<br/>Preview</div>);
        }

        return (
            <div>
                <div>
                    <nav className="profile">
                        <div className="header">
                            <h1>Wanderlust</h1>
                        </div>

                        <div className="secondpart">
                            <div className="text" >
                                <a className="search" href="#"><p className="newclass">Search</p></a>
                            </div>
                            <div>
                                < h2 className="newclass1">Profile</h2>
                            </div>
                        </div>
                    </nav>
                    <div classname="about">
                    </div>
                    <div>

                        <div >
                        <a  href="#" className="work">Profile</a>
                        <Link to="ExperienceProfie" className="work">ExperienceProfie</Link>
                        <Link to = "/PostsPage"className="work">ExperienceView</Link>
                        <Link to= "/TravelGuide"className="work">ExperienceProfie</Link>
                        <Link  className="work" to="/TravelGuide" >TravelGuide</Link>
                        </div>
                    </div>

                    <div className="form" >
                    <div>
                        <form onSubmit={this.handleSubmit}>
                    
                           <h1 className="profiles">Wanderlust Profile</h1>
                            <div className="placeholder">
                                <input className="imagehandle fileInput" type="file" onChange={this.handleImageChange} />
                                <button className="submitButton" type="submit" onClick={this.uploadImage}>Upload Image</button>
                            </div>
                            <div className="imgPreview">
                                {imagePreview}
                            </div>
                            <div className="maindiv">
                                <span className="submit">Bio : </span>
                                <input className="textitem" type="name" id="name" placeholder="Enter Name" name="bio" value={this.state.bio} onChange={this.handleChange} />
                            </div>
                            <div className="maindiv">
                                <span className="submit" >Name : </span>
                                <input className="textitem" type="name" id="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="maindiv">
                                <span className="submit">Email : </span>
                                <input className="textitem" type="email" id="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="maindiv">
                                <span className="submit">Location : </span>
                                <input className="textitem" type="name" id="name" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange} />
                            </div>
                            <div className="maindiv">
                                <button className="botton" type="submit">Save</button>
                            </div>

                            {
                            this.state.saved && (
                                <div>
                                    <div className="Card">
                                        <div>
                                       <p className="paragraph"> Congratulation your profile has been created succesfully!! </p>
                                        </div>
                                        <div>
                                            {this.state.img}
                                        </div>
                                        <div className="">
                                         {this.state.bio}
                                         </div>
                                         <div>
                                         {this.state.name}
                                         </div>
                                         <div>
                                         {this.state.email}
                                         </div>
                                         <div>
                                         {this.state.location}
                                         </div>
                                    </div>
                                   
                                    </div>
                            )
                        }
                        </form>
                      
                       
                      </div>
                    </div>
                </div>

            </div>
            

        )
    }
}

export default ProfilePage


