import React from 'react'

class Invitation extends React.Component {
  render() {
    
    // React.Children.map takes two arguments -- the children and a
   // function that defines what the map should return

    return (
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>      
    );
  }
}

module.exports = Invitation;
