import { useState, useEffect
  
 } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [source, setSource] = useState("");
  const [errorPnatalla, setErrorPantalla] = useState("")

  const getQuote = () => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => {
        console.log(data)
        setQuote(data.text);
        setSource(data.source);
      })
      .catch(error => setErrorPantalla(error.message) );
  };
  
  useEffect(getQuote, []);

  return (
    <div>
      <button onClick={getQuote}>New Quote</button>
      <br></br>
      <p>{quote}</p>
      <p>{source}</p>
      <h2>{errorPnatalla}</h2>
    </div>
  );
}

export default App;