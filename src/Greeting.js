const NAMES = ["Sandipan", "Sandip", "Dip", "Pratik"];

function Greeting(props) {
  return <h1>Welcome {props.username} !</h1>;
}

const domContainer_greeting = document.querySelectorAll(".greeting");
domContainer_greeting.forEach((domContainer, Index) => {
  ReactDOM.render(<Greeting username={NAMES[Index]} />, domContainer);
});
