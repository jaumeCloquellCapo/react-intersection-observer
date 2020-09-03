import React, { Component } from 'react';
import List from './List'
import ListItem from './ListItem'
import fetchPhotos from './fetchPhotos'
import lazyLoadImage, { config } from './lazyLoadImage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { photos: [] }
  
  observer = new window.IntersectionObserver(lazyLoadImage, config)
  
  async componentDidMount () {
    const photos = await fetchPhotos()

    this.setState({
      photos
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lazy load</h1>
        </header>
        <List>
          {
            this.state.photos.map(({ id, sprite }) => 
              <ListItem key={id} sprite={sprite} observer={this.observer} />
            )
          }
        </List>
      </div>
    );
  }
}

export default App;
