import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Greetings to Sara" />
      <Welcome name="Cahal Greetings" />
      <Welcome name="Edite is loving github" />
    </div>
  );
}

function App_second() {
    return (
        <div>
            <Welcome name="Greetings to Sara" />
            <Welcome name="Cahal Greetings" />
            <Welcome name="Edite here you are" />
        </div>
    );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
