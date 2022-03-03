const e = React.createElement;

function Greeting(props) {
  return e("h1", {}, `Welcome !`);
}

const domContainerGreeting = document.querySelector("#greeting");
ReactDOM.render(e(Greeting), domContainerGreeting);
