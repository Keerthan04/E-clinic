const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const eclinicRouter = require('./routes/eclinic');
dotenv.config();
const PORT = process.env.DB_PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/',eclinicRouter);


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

module.exports = app;