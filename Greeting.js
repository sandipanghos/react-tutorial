const e = React.createElement;

function Greeting(props) {
  return e("h1", {}, `Welcome ${props.username} !`);
}

const domContainer = document.querySelector("#greeting");
ReactDOM.render(e(Greeting, { username: "Sandipan" }), domContainer);
