import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default class Actions extends Component {
  copyPermaLink(copyText) {
    const textField = document.createElement('textarea');
    textField.innerText = `${window.location.origin}/${copyText}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  render() {
    const { nextQuote, prevQuote, quoteNumber } = this.props;
    return (
      <div className="actionRow">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevQuote} />
        <FontAwesomeIcon icon={faLink} onClick={() => this.copyPermaLink(quoteNumber + 1)} />
        <FontAwesomeIcon icon={faChevronRight} onClick={nextQuote} />
      </div>
    );
  }
}
