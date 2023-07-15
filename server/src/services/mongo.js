const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://amansin97:hKs6TJgVZ4KqV6uh@nasacluster.pchgrmk.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = {
  mongoConnect,
};
