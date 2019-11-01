const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./api/modules/book/book.router');
const chapterRouter = require('./api/modules/chapter/chapter.router');
const linkRouter = require('./api/modules/link/link.router');
const userRouter = require('./api/modules/user/user.router');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
// const authRouter = require('./api/modules/auth/auth.router');

mongoose.connect(config.mongoConnectionString);
const PORT = 6969;

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use('/', express.static('../client/public'));
app.use('/api/book', bookRouter);
app.use('/api/chapter', chapterRouter);
app.use('/api/link', linkRouter);
app.use('/api/user', userRouter);

// app.use('/api/auth', authRouter);

app.listen(PORT, function () {
	console.log(`Server is listening on ${PORT}`);
});
