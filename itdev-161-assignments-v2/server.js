import express from 'express'

//Initialize express app
const app = express();

//API endoint
app.get('/', (req, res) => 
    res.send('Response from my app.')
);

//API endoint
app.get('/status', (req, res) => 
    res.send('The app is up and running.')
);

//
app.listen(8181, () => console.log('Server started at port 8181.'))