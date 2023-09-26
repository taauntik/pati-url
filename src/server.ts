import mongoose from 'mongoose';
import { app } from './app';
import config from './config/index';

async function main() {
  try {
    await mongoose.connect(config.db_Url);
    app.listen(config.port, () => {
      console.log(`App is listening on port: ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect database', error);
  }
}

main();
