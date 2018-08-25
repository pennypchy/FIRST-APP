import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.jsx';
import ImageLinkForm from './components/imageLinkForm/imagelinkform.jsx';
import Rank from './components/rank/rank.jsx';
import SignIn from './components/signin/signin.jsx';
import Register from './components/register/register.jsx';
import PictureContainer from './components/picturecontainer/picturecontainer.jsx';
import Footer from './components/footer/footer.jsx';
import Particles from 'react-particles-js';
import 'tachyons';

const particlesbg ={
  particles: {
    number:{
      value:40,
      density:{
        enable: true,
        value_area:900
      }
    },
    line_linked: {
        distance: 170,
        opacity: 0.6,
        width:1,
              			}
              		}
};
class App extends Component {
  constructor() {
    super();
    this.state={
      input:"",
      imgUrl:"",
      route:"signin",
      isSignedIn:false,
      user:{
        id:'',
        name:'',
        email:'',
        entries:0,
        joined: '',
      }
    }
  }

loadUser = (data)=>{
  this.setState({user:{
    id:data.id,
    name:data.name,
    email:data.email,
    entries:data.entries,
    joined: data.joined,
  }})
}
// componentDidMount(){
//   fetch('http://localhost:3000')
//   .then(response => response.json())
//   .then(console.log)
// }
//   onInputChange = (event) => {
// // this.setState({input: event.target,value});
//   }
//
//   onSubmit = ()=>{
// // this.setState({imgUrl:this.state.input})
//   }

  onRouteChange = (route) =>{
    if (route === "signout"){
      this.setState({isSignedIn:false})
    } else if (route ==="home") {
      this.setState({isSignedIn:true})
    }

    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesbg} />
        {this.state.route === "home" ?
          <div>
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
          <PictureContainer />
          <Footer />
        </div> :
          (this.state.route === "signin" ?
        <SignIn onRouteChange={this.onRouteChange}/> :
        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      )
    }
      </div>
    );
  }
}

export default App;
