import express from 'express'
import connectDatabase from './config/db'

//Initialize express app
const app = express();

//API endoint
app.get('/', (req, res) => 
    res.send('Http get request sent to root API endpoint.')
);

connectDatabase();

//
app.listen(3000, () => console.log('Server started at port 3000.'))