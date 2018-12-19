import React, { Component } from 'react';
import './App.css';

const quotes = [
  [
    'From the very beginning all beings are Buddha.',
    'Like water and ice,',
    'without water no ice,',
    'outside us no Buddhas.',
  ],
  [
    'How near the truth',
    'yet how far we seek,',
    'like one in water crying ‘I thirst!’',
    'Like a child of rich birth wandering poor on this earth,',
    'we endlessly circle the six worlds.',
  ],
  [
    'The cause of our sorrow is ego delusion.',
    'From dark path to dark path we’ve wandered in darkness.',
    'How can we be free from birth and death ?',
    'The gateway to freedom is zazen samadhi-',
    'beyond exaltation, beyond all our praises,',
    'the pure Mahayana.',
  ],
  [
    'Upholding the precepts,',
    'repentance and giving,',
    'the countless good deeds,',
    'and the way of right living',
    'all come from zazen.',
  ],
  [
    'Thus one true samadhi extinguishes evils;',
    'it purifies karma, dissolving obstructions.',
    'Then where are the dark paths to lead us astray ?',
    'The pure lotus land is not far away.',
  ],
  [
    'Hearing this truth, heart humble and grateful,',
    'to praise and embrace it,',
    'to practice its wisdom,',
    'brings unending blessings,',
    'brings mountains of merit.',
  ],
  [
    'And when we turn inward and prove our True-nature-',
    'that True-self is no-self,',
    'our own Self is no-self-',
    'we go beyond ego and past clever words.',
  ],
  [
    'Then the gate to the oneness of cause and effect is',
    'thrown open.',
    'Not two and not three,',
    'straight ahead runs the Way.',
  ],
  [
    'Our form now being no-form,',
    'in going and returning we never leave home.',
    'Our thought now being no-thought,',
    'our dancing and songs are the voice of the Dharma.',
  ],
  ['How vast is the heaven of boundless samadhi !', 'How bright and transparent the moonlight of wisdom !'],
  [
    'What is there outside us,',
    'what is there we lack ?',
    'Nirvana is openly shown to our eyes.',
    'This earth where we stand is the pure lotus land,',
    'and this very body-the body of Buddha.',
  ],

  // <div>Computers are useless, they only give you answers.</div>,
];

class App extends Component {
  render() {
    const path = window.location.pathname.substring(1);
    const randomNum = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomNum];
    return (
      <div className="App">
        <header className="App-header">
          <div>{randomNum + 1}</div>
          <p />
          {quote.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
