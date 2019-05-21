import React from "react"
import SignUp from "./SignUpForm"
import LogIn from "./SignIn"
import { Route } from 'react-router-dom';
import "./forms.css"


class SignInLogInForms extends React.Component{
render(){
    return(
<div>
    <div className="maindivs">
        <div>

        </div>

<div>
  <Route exact path="/SignUp" component={SignUp} />
  <Route exact path="/LogIn" component={LogIn} />
  </div>
  </div>
   </div>
    );
}
}
export default SignInLogInForms



        
          

      

     








{/* <div className="maindiv maindiv1">
</div>

<div className="App">
<div className="maindiv maindiv1">
</div>
<div className="maindiv maindiv1">
</div>
<div className="App"></div>
 <div className="maindiv maindiv2">
  <Route exact path="/SignUp" component={SignUp} />
  <Route exact path="/LogIn" component={LogIn} />
  </div>
  </div>
  </div> */}