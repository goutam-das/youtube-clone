import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const app = express();


app.get('*', (req, res) => {
    res.json({ msg: 'It\'s working...' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})