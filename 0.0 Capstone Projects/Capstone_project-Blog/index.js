import express from 'express';
import bodyParser from 'body-parser';

let posts = []; // Placeholder for posts data

let tempPost = {
    id: 1,
    title: 'Temporary Post Title',      
    content: ' Temporary post content goes here. This is a placeholder for the actual post content.',
}


posts.push(tempPost); // Adding a temporary post for demonstration

const app = express();
const port = 3000;  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', { posts: posts }); // Render index with posts data 
});

app.get('/create-post', (req, res) => {
    res.render('create-post.ejs'); 
});

app.get("/post/:id", (req, res) => {
    const postId = Number(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render('post.ejs', { post: post }); // Render individual post
    } else {
        res.status(404).send('Post not found'); // Handle post not found
    }
});

app.post('/submit', (req, res) => {
    let title = req.body.title;
    let content = req.body.content; 
    let newPost = {
        id: posts.length + 1, // Simple ID generation
        title: title,
        content: content
    };
    posts.push(newPost); // Add new post to the posts array
    res.redirect('/'); // Redirect to the home page after submission
});

app.post('/submit/:id', (req, res) => {
    const postId = Number(req.params.id);   
    const post = posts.find(p => p.id === postId);
    if (post) { 
        posts[postId - 1].title = req.body.title; // Update post title
        posts[postId - 1].content = req.body.content; // Update post content
        res.redirect(`/post/${postId}`); // Redirect to the updated post
    } else {
        res.status(404).send('Post not found'); // Handle post not found    
    }
});

app.post('/delete-post/:id', (req, res) => {
    console.log('Delete post request received');
    const postId = Number(req.params.id);         
    posts = posts.filter(p => p.id !== postId); // Remove post with the given ID
    res.redirect('/'); // Redirect to the home page after deletion      
});

app.post('/create-post/:id', (req, res) => {
    const postId = Number(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.title = req.body.title; // Update post title
        post.content = req.body.content; // Update post content
        res.redirect(`/post/${postId}`); // Redirect to the updated post
    } else {
        res.status(404).send('Post not found'); // Handle post not found
    }
});

app.get('/edit-post/:id', (req, res) => {
    const postId = Number(req.params.id);   
    const post = posts.find(p => p.id === postId);
    if (post) {     
        res.render('edit-post.ejs', { post: post }); // Render edit post page with post data
    } else {
        res.status(404).send('Post not found'); // Handle post not found
    }
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});