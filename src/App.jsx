import React, { Component } from 'react'
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) { // створюється лише тоді, коли ми хочемо зробити state. Найчастіше за все тільки для станів (state)
    super(props); // унаслідувати всі пропси від класа якого ми розширяємо, завжди використовується у constructor
    this.state = { // властивість об'єкта, в класі створюється об'єект state.
      count: 0,
      qwerty: "qwe",
      isVisible: true,
    }

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // для функцій використовується 2 варіанта:
  // 1 варіант (з біндом у конструкторі):
  handleIncrement() { // просто функція, назва вигадана
    this.setState({ count: this.state.count + 1 });
  };

  qweCount() {
    this.setState({ qwerty: this.state.qwerty + "rty" });
  };

  // 2 варіант:
  handleDecrement(number) { // просто функція, назва вигадана
    this.setState({ count: this.state.count - number });
  };


  render() { // повертає тільки jsx
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ isVisible: !this.state.isVisible})}>{this.state.isVisible ? "Hide footer" : "Show footer"}</button>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={() => this.handleDecrement(2)}>Increment</button>

        {this.state.isVisible ? (
          <Footer footerTitle="Fooooooooooooter" />
        ) : (
          <p>Footer is hidden</p>
        )}
      </div>
    );
  };
};