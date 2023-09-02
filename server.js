import app from './app.js';

// mongoos
//   .then(() => {
//     console.log('DB connection success');
//   })
//   .catch((error) => {
//       console.log(error.message);
//     throw Error('Error When connecting mongoose: ', error);
//   });

const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is successfully Running, and App is listening to port ${PORT}`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
