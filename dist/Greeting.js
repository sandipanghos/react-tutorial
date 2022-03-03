var NAMES = ["Sandipan", "Sandip", "Dip", "Pratik"];

function Greeting(props) {
  return React.createElement(
    "h1",
    null,
    "Welcome ",
    props.username,
    " !"
  );
}

var domContainer_greeting = document.querySelectorAll(".greeting");
domContainer_greeting.forEach(function (domContainer, Index) {
  ReactDOM.render(React.createElement(Greeting, { username: NAMES[Index] }), domContainer);
});