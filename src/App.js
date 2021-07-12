import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
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

// Clarifai API (Don't forget to set your API key)
const app = new Clarifai.App({
  apiKey: 'YOUR API KEY',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('Button clicked!');

    // get the reponse from Clarifai API (Replace Model ID with the face recognition model id)
    // Takes in the image's link as an input then checks for any faces
    app.models
    .predict('Model ID', this.state.input)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
      return (
        <div className="App">
          <Particles className='particles' params={ particlesOptions } />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit }/>
          {/*<FacialRecognition />*/}
        </div>
    );
  }
}

export default App;
