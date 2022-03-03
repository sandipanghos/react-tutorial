var e = React.createElement;

function Greeting(props) {
  return React.createElement(
    "h1",
    null,
    "Welcome ",
    props.username,
    " !"
  );
}

var domContainer = document.querySelector("#greeting");
ReactDOM.render(React.createElement(Greeting, { username: "John" }), domContainer);