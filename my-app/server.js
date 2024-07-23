const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const util = require('util');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.query = util.promisify(pool.query);

// Test database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
    connection.release();
});


app.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Basic input validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword],
            (error, result) => {
                if (error) {
                    console.error('Signup error:', error);
                    if (error.code === 'ER_DUP_ENTRY') {
                        return res.status(409).json({ error: 'Email already exists' });
                    }
                    return res.status(500).json({ error: 'Error creating user: ' + error.message });
                }
                res.status(201).json({ message: 'User created successfully' });
            }
        );
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Error creating user: ' + error.message });
    }
});
  
app.post('/api/login', (req, res) => {
    console.log('Login route accessed');
    const { email, password } = req.body;

    // Basic input validation
    if (!email || !password) {
        console.log('Missing email or password');
        return res.status(400).json({ error: 'Email and password are required' });
    }
    
    console.log('Querying database for user');
    pool.query(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (error, results) => {
            if (error) {
                console.error('Database query error:', error);
                return res.status(500).json({ error: 'Error logging in' });
            }

            console.log('Database query completed');

            if (results.length === 0) {
                console.log('No user found with the provided email');
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            
            const user = results[0];
            console.log('User found, comparing passwords');

            bcrypt.compare(password, user.password, (bcryptError, isMatch) => {
                if (bcryptError) {
                    console.error('Bcrypt comparison error:', bcryptError);
                    return res.status(500).json({ error: 'Error during login process' });
                }

                if (!isMatch) {
                    console.log('Password does not match');
                    return res.status(401).json({ error: 'Invalid credentials' });
                }

                console.log('Password matched, generating token');
                const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                
                console.log('Sending successful login response');
                res.json({ token, userName: user.name });
            });
        }
    );
});




app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, './build/index.html'))
})

app.use(express.static(path.join(__dirname, 'build')))

app.get('/products', async (req, res) => {
    try {
        const sql = 'SELECT * FROM products';
        const results = await pool.query(sql);
        res.json(results);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});




app.post('/checkout', async (req, res) => {
    const { items } = req.body;
    const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount * 100,
            currency: 'usd',
            payment_method_types: ['card']
        });
        res.json({
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: error.message });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
