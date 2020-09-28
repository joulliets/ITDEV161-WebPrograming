import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';

// Initialize express app
const app = express();

// Confi. Middlaware
app.use(express.json({extended: false}));

//API endoint
app.get('/', (req, res) => 
    res.send('Http get request sent to root API endpoint.')
);

// Api/users - validation code - check errors
app.post(
    '/api/users', 
[
    check(
        'name', 
        'Please enter your name')
        .not()
        .isEmpty(),
    check(
        'email', 
        'Please enter a valid email')
        .isEmail(),
    check(
        'password', 
        'Please enter a password with a 6 or more characters'
    ).isLength({min: 6 })
],
(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errors: errors.array() }); 
    } else {
        return res.send(req.body);
    }
}
);

connectDatabase();

// Connection listener
app.listen(3000, () => console.log('Server started at port 3000.'))