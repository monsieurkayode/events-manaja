import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('build'));
app.use('*', express.static('build'));

app.listen(port, () => {
  console.log(`*** Server started on port: ${port} ***`);
});

export default app;
