import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>chai or code | Harish</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.id}</h3>
          <h2>{joke.content}</h2>
        </div>
        ))}
    </>
  );
}

export default App;
