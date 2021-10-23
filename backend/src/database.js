import mongoose from "mongoose";

let uri = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Conectado a MongoDB ");
   
  })
  .catch(err => {
    console.error(err);
  });


  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  };
  