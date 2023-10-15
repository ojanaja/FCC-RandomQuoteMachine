import React, { useState, useEffect } from "react";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={getQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteBox;
