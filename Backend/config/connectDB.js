import {mongoose} from 'mongoose';

process.loadEnvFile('./secret.env');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); 
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('mongodb error: ',error.message);
        process.exit(1);
    }
};

export {connectDB};