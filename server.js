import express from 'express';
import axios from 'axios';


const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [];

app.post('/posts', async (req, res) => {
    const { title, content} = req.body;
    const newPost = {
        id: String(posts.length + 1),
        title: title,
        content: content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
    }
);
// Start the server
app.listen(PORT, () => {
    console.log('Server running at http://localhost:3000');
});