import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect( process.env.MONGODB_URL||'mongodb://localhost:27017/Websquad', {
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

export default connectDB;