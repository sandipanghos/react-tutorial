"use strict";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: 0 };
    this.onLike = this.onLike.bind(this);
  }
  onLike() {
    this.setState((state, props) => ({ like: state.like + 1 }));
  }
  render() {
    // Display a "Like" <button>
    return <button onClick={this.onLike}>Like {this.state.like}</button>;
  }
}

const domContainer = document.querySelector("#like_container");
ReactDOM.render(<LikeButton />, domContainer);
