import React from 'react'


class NewForm extends React.Component{
  
  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.NewCard(this.state.flashcards);
    this.setState({ flashcards: ''}
    )}
  
  
  // how do we get the newCard prop?
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input required placeholder="Add New Card" />
        <hr/>
        <input required placeholder="Add Answer" />
        {/* button that submits goes to newCard */}
      </form>
      
    )
  }
}
export default NewForm;
