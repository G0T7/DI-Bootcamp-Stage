// src/QuoteGenerator.js
import React, { useState } from 'react';
import quotes from './QuotesDatabase';
import './QuoteGenerator.css';

const QuoteGenerator = () => {
  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  };

  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    let newQuote = getRandomQuote();
    while (newQuote.quote === quote.quote) {
      newQuote = getRandomQuote();
    }
    setQuote(newQuote);
  };

  return (
    <div className="quote-box">
      <h1>{quote.quote}</h1>
      <p>- {quote.author} -</p>
      <button onClick={handleNewQuote}>New quote</button>
    </div>
  );
};

export default QuoteGenerator;