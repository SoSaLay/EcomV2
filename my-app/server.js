const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const util = require('util');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Promisify for Node.js async/await.
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

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    db.query(sql, [email, hashedPassword], (err, results) => {
        if (err) {
            return res.status(500).send('Error registering user');
        }
        res.status(201).send('User registered');
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send('Error logging in');
        }
        if (results.length === 0 || !bcrypt.compareSync(password, results[0].password)) {
            return res.status(401).send('Invalid credentials');
        }
        const token = jwt.sign({ userId: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ token });
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

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
