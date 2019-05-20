import React from "react"


class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            name: "",
            hasAgreed: false

        }
    }

    


    render() {
        return (
            <div>
                <form>
                    <input type="text" id="name" placeholder="Enter Your Full Name" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="password" id="password" placeholder="Enter your PassWord" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="Email" id="email" placeholder="Enter Email" name="Email" value={this.state.hasAgreed} onChange={this.handleChange} />
                    <input type="checkbox" name="hasAgreed" /> <span>I agree all Statement in</span>
                    <button type="submit">SignUp</button>  <a href="#">I am ALready Menber</a>

                </form>
            </div>
        )
    }

}

export default Signup;