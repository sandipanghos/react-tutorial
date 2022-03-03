const e = React.createElement;

const NAMES = ["Sandipan", "John", "Berry", "Pratik"];

function Greeting(props) {
  return e("h1", {}, `Welcome ${props.username} !`);
}

const domContainer_greetings = document
  .querySelectorAll(".greeting")
  .forEach((domContainer, index) => {
    ReactDOM.render(e(Greeting, { username: NAMES[index] }), domContainer);
  });
