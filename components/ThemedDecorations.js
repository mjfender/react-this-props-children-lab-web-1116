import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    
    // React.Children.map takes two arguments -- the children and a
   // function that defines what the map should return
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
        // React.cloneElement takes two arguments - the child and which     
        // additional props to add to it
    });

    return (
      <div className="themed-decorations">
        {childrenWithExtraProp}
      </div>      
    );
  }
}

module.exports = ThemedDecorations;
