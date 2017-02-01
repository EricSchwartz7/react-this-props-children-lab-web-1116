const React = require('react');
const ReactDOM = require('react-dom');

class ThemedDecorations extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return (
        <p className={this.props.theme}>{child}</p>
      )})
    return(
      <div className="ThemedDecorations">
        {children}
      </div>
    )
  }
}

module.exports = ThemedDecorations
