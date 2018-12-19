import React, { Component } from 'react';
import './App.css';

import { allQuotes } from './helpers/quotes';
import Quote from './components/quote/quote';
import Actions from './components/actions/actions';

class App extends Component {
  state = {
    activeQuoteIndex:
      window.location.pathname.substring(1) && window.location.pathname.substring(1) <= allQuotes.length
        ? parseInt(window.location.pathname.substring(1)) - 1
        : Math.floor(Math.random() * allQuotes.length),
  };

  render() {
    const { activeQuoteIndex } = this.state;

    return (
      <div className="App">
        <header className="container">
          <div />
          <div>
            <Quote quoteNumber={activeQuoteIndex} />
          </div>
          <Actions
            quoteNumber={activeQuoteIndex}
            nextQuote={() => this.nextQuote()}
            prevQuote={() => this.prevQuote()}
          />
        </header>
      </div>
    );
  }

  nextQuote() {
    const { activeQuoteIndex } = this.state;
    const newQuoteIndex = activeQuoteIndex < allQuotes.length - 1 ? activeQuoteIndex + 1 : 0;
    this.setState({ activeQuoteIndex: newQuoteIndex });
  }

  prevQuote() {
    const { activeQuoteIndex } = this.state;
    const newQuoteIndex = activeQuoteIndex > 0 ? activeQuoteIndex - 1 : allQuotes.length - 1;
    this.setState({ activeQuoteIndex: newQuoteIndex });
  }
}

export default App;
