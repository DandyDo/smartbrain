import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FacialRecognition from './components/FacialRecognition/FacialRecognition';
import Title from './components/Title/Title';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import './App.css';


// Particles options from TsParticles
const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 80,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 4,
    },
  },
  detectRetina: true,
}

const initialState = {
  input: '',
  imageUrl:'',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:'',
      boxes: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }})
}
  
  // Calculate the four points of the face(s) detection box and returns the object info
  calculateFaceLocation = (data) => {
    const clarifaiFaces = data.outputs[0].data.regions.map(region => region.region_info.bounding_box);
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);

    return clarifaiFaces.map(face => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      }
    });
  }

  // Takes the calculatedFaceLocation returned object and displays the box
  displayFaceBox = (boxes) => {
    this.setState({ boxes: boxes });
  }
  
  // Sets the state of the input from ImageLinkForm whenever the user types
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  // Sets the state of the image from FacialRecognition whenever the submits
  onImageSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    // Takes in the image's link as an input then checks for any faces, updating entries.
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input,
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        throw new Error('Error with user input');
      }
    })
    .then(response => {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id,
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count }))
        })
        .catch(console.log);
      }
      
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch((error) => console.log(error));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    }
    else if (route === 'home'){
      this.setState({ isSignedIn: true });
    }

    this.setState({ route: route });
  }

  render () {
    const { imageUrl, boxes, route, isSignedIn} = this.state;
      return (
        <div className="App relative min-vh-100">
          <Particles className='particles' 
            params={ particlesOptions } 
          />
          <Navigation isSignedIn={ isSignedIn } onRouteChange= { this.onRouteChange }/>
          { 
            route === 'home'
            ? <div>
                <Logo />
                <Rank 
                  name = { this.state.user.name }
                  entries = { this.state.user.entries }
                />
                <ImageLinkForm 
                  onInputChange={ this.onInputChange } 
                  onImageSubmit={ this.onImageSubmit }
                />
                <FacialRecognition 
                  imageUrl={ imageUrl }
                  boxes={ boxes }
                />
              </div>
            : (
                <div>
                  <Title />
                  {
                    route === 'signin'
                    ? <SignIn loadUser={ this.loadUser } onRouteChange={ this.onRouteChange }/>  
                    : route === 'signout'
                    ? <SignIn loadUser={ this.loadUser } onRouteChange={ this.onRouteChange }/>  
                    : <Register loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
                  }
                </div>
              )   
          }
          <Footer />
        </div>
    );
  }
}

export default App;
