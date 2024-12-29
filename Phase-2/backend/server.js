import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// app.use(cors()); 
app.use(express.static('dict')); // use middleware   

const jokes = [
  { id: 1, content: "Why so serious? Chill!" },
  { id: 2, content: "Knock, knock. Who’s there? Boo!" },
  { id: 3, content: "What’s up? Ceiling." },
  { id: 4, content: "Why no Wi-Fi? Because it's grounded." },
  { id: 5, content: "Hungry? Let’s taco 'bout it!" },
];

app.get("/api/jokes", (req, res) => {
  res.status(200).send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
