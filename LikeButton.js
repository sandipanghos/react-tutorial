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
    return e(
      "button",
      { style: { margin: "10px" }, onClick: () => this.onLike() },
      `Like ${this.state.like}`
    );
  }
}

const domContainer = document
  .querySelectorAll(".like_container")
  .forEach((domContainer) => {
    ReactDOM.render(e(LikeButton), domContainer);
  });
