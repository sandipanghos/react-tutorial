const e = React.createElement;

function Greeting(props) {
  return <h1>Welcome {props.username} !</h1>;
}

const domContainer = document.querySelector("#greeting");
ReactDOM.render(<Greeting username="John" />, domContainer);
