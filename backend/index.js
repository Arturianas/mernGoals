const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;
const goalRoute = require('./routes/goalRoutes');
const userRoute = require('./routes/userRoutes')




connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', goalRoute);
app.use('/api/users', userRoute);

app.use(errorHandler);

// Last piece
app.listen(port, () => {
    console.log(`Server Started at PORT: ${port} it is MernStack_part1`)
})