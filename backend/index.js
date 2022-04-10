const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;
const goalRoute = require('./routes/goalRoutes');
const userRoute = require('./routes/userRoutes');






connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', goalRoute);
app.use('/api/users', userRoute);




//Serve frontend


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req,res) => res.send('Please set to production'))
}

app.use(errorHandler);

// Last piece
app.listen(port, () => {
    console.log(`Server Started at PORT: ${port} it is MernStack_final_part`)
})