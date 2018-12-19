import React, { Component } from 'react';
import './App.css';

import { allQuotes } from './helpers/quotes';
import Quote from './components/quote/quote';
import Actions from './components/actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
    const path = parseInt(window.location.pathname.substring(1));
    this.state = {
      activeQuoteIndex: path && path <= allQuotes.length ? path - 1 : 0,
      // : Math.floor(Math.random() * allQuotes.length),
    };
  }

  render() {
    const { activeQuoteIndex } = this.state;

    return (
      <div className="App">
        <header className="container">
          <a href="http://www.rzc.org" target="_blank" rel="noopener noreferrer">
            <img src={require('./assets/rzc.png')} className="image" alt="rochester zen center" />
          </a>
          <div>
            <Quote quoteNumber={activeQuoteIndex} />
          </div>
          <Actions
            quoteNumber={activeQuoteIndex}
            next={() => this.next()}
            prev={() => this.prev()}
            random={() => this.random()}
          />
        </header>
      </div>
    );
  }

  random() {
    this.setState({ activeQuoteIndex: Math.floor(Math.random() * allQuotes.length) });
  }

  next() {
    const { activeQuoteIndex } = this.state;
    const newQuoteIndex = activeQuoteIndex < allQuotes.length - 1 ? activeQuoteIndex + 1 : 0;
    this.setState({ activeQuoteIndex: newQuoteIndex });
  }

  prev() {
    const { activeQuoteIndex } = this.state;
    const newQuoteIndex = activeQuoteIndex > 0 ? activeQuoteIndex - 1 : allQuotes.length - 1;
    this.setState({ activeQuoteIndex: newQuoteIndex });
  }
}

export default App;
