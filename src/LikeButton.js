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
    return (
      <button style={{ margin: "10px" }} onClick={this.onLike}>
        Like {this.state.like}
      </button>
    );
  }
}

const domContainer_like = document.querySelectorAll(".like_container");
domContainer_like.forEach((domContainer) => {
  ReactDOM.render(<LikeButton />, domContainer);
});
