import React, {Component} from 'react';

class Fave extends Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isFave: false
    }
  }

  handleClick(e) {
    console.log("Handling fave click now!");
    e.stopPropagation();
    this.setState({
      isFave: !this.state.isFave
    })
  }
  
  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'

    return(
      
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave