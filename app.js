const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./api/modules/book/book.router');
const chapterRouter = require('./api/modules/chapter/chapter.router');
const userRouter = require('./api/modules/user/user.router');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
// const authRouter = require('./api/modules/auth/auth.router');

mongoose.connect(config.mongoConnectionString);

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use('/', express.static('../client/public'));
app.use('/api/book', bookRouter);
app.use('/api/chapter', chapterRouter);
app.use('/api/user', userRouter);

// app.use('/api/auth', authRouter);

let port = process.env.PORT;
if (port == null || port == "") {
	port = 6969;
}
app.listen(port);
