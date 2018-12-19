import React, { Component } from 'react';
import { allQuotes } from '../../helpers/quotes';

class Quote extends Component {
  render() {
    const { quoteNumber } = this.props;
    const quote = allQuotes[quoteNumber];

    return (
      <div>
        <div>{quote.map((line, index) => (line ? <div key={index}>{line}</div> : <p />))}</div>
        <p />
        <div>{quoteNumber + 1}</div>
      </div>
    );
  }
}

export default Quote;
