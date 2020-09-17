import express from 'express'

//Initialize express app
const app = express();

//API endoint
app.get('/', (req, res) => 
    res.send('Http get request sent to root API endpoint.')
);

//
app.listen(3000, () => console.log('Server started at port 3000.'))