import express from 'npm:express';
import { fromRovarsprakHandler, toRovarsprakHandler } from './handlers.ts';

const PORT = 8000;

const app = express();
app.use(express.json());

app.post('/translate/toRovarsprak', toRovarsprakHandler);

app.post('/translate/fromRovarsprak', fromRovarsprakHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
