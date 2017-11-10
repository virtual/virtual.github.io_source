import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Container, Grid, Image } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Container>
        
          <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={12}>
      <h1>About Jeanine</h1>
      <p>Jeanine enjoys crafting web experiences for higher education and non-profits. Her passions include listening to pop punk music, sharing Chinese language and culture with those around her, and visiting every aircraft museum she and her husband can find. She is a 2015 graduate of the Leadership MSU program and currently studies Business Administration – Management at Great Falls College-MSU.</p>
      <p>Jeanine previously developed websites for Montana State University and MontanaPBS (2009-2015). She enjoys implementing new designs into responsive HTML/CSS and specializes in working with OmniUpdate and clients in #heweb!</p>
  </Grid.Column>
    
      <Grid.Column width={4}>
         <Image src='//avatars0.githubusercontent.com/u/93795?v=3&amp;s=460' alt="Jeanine Schoessler" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={4}>
       mew
      </Grid.Column>
      <Grid.Column width={4}>
      mew
     </Grid.Column>
     <Grid.Column width={4}>
       mew
      </Grid.Column>
      <Grid.Column width={4}> 
         
      <ul><li><a href="https://github.com/virtual">GitHub</a></li><li><a href="http://satinflame.com">Website</a></li></ul>
        
      </Grid.Column>
    </Grid.Row>
   
 
  </Grid>
        
        </Container>
      </div>
    );
  }
}

export default App;
