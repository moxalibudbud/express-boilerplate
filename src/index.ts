import app from './app';
import { config  } from './config';

const server = app.listen(config.PORT, () => {
  console.info(`Listening to port ${config.PORT}`);
});