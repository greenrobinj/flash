import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewForm from './NewForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flashcards: [], showForm: false, }
  }

  // way to add new card to flashCards array in state
  // when we submit our form, this function is triggered
  newCard(card) {
    debugger
    // this.setState( (state,) => {
      // return { this.state.flashcards, ...this.state.flashcards}
    // });
  }

  // toggleForm function
  toggleForm =() => {
    this.setState({showForm: !this.state.showForm })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FLASH---AWW!!</h1>
        </header>
        <h2 className="App-intro">
          Flash Master of the universe!!
        </h2>
        <div>
          {/* based off state, this form will show/hide */}
          {/* pass newCard as a prop to newForm */}
          <button onClick={this.toggleForm}> Add New Card </button>
          
          { this.state.showForm ? <NewForm /> : null}


          <flashcard/>
        </div>
        <div>
          {this.state.flashcards}
          {/* onClick triggers function that sets state (showForm) */}
        </div>
      
      </div>
    );
  }
}

export default App;
