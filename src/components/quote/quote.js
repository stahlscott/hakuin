import React, { Component } from 'react';
import { allQuotes } from '../../helpers/quotes';

class Quote extends Component {
  render() {
    const { quoteNumber } = this.props;
    const quote = allQuotes[quoteNumber];

    return (
      <div>
        <div>{quoteNumber + 1}</div>
        <p />
        {quote.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    );
  }
}

export default Quote;
