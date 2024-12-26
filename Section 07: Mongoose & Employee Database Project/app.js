const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const app = express();

const employeeRoutes = require('./routes/employees');

dotenv.config({ path: './config.env' });

// connecting to MongoDB
mongoose.connect(process.env.DATABASE_LOCAL);

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(employeeRoutes);
app.use(methodOverride('_method'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});