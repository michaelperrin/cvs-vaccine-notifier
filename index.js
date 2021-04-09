import dotenv from 'dotenv';
import hasAvailability from './src/hasAvailability.js';
import sendNotification from './src/notifier.js';

dotenv.config();

const [
  state,
  city,
] = process.argv.slice(2);

if (await hasAvailability(state, city)) {
  sendNotification(`There is availability in ${city}, ${state}`);
}
