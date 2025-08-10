
import User from "../models/userModel.js";
import errorHandler from "../utils/errorHandler.js";
import { userAlreadyExists, missingFields, userCreated, userNotFound, incorrectCredentials, loginSuccess, userDeleted } from "../utils/message.js";
import Response from "../utils/Response.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

process.loadEnvFile('./secret.env');

const registerUser = async (req, res) => {

    try {   

        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            errorHandler(null, missingFields, 400, res);
            return;
        }
        const alreadyExists = await User.findOne({email});
        if (alreadyExists) {
            errorHandler(null, userAlreadyExists, 409, res);
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 6);
        const newUser = await User.create({name, email, password : hashedPassword});
        const {password: _, ...userData } = newUser.toObject();
        return Response(userData, userCreated, 201, res);
    } catch (error) {
        errorHandler(error, null, 500, res);
        return;
    }
}

const loginUser = async(req, res) => {

    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            errorHandler(null, missingFields, 400, res);
            return;
        }

        const user = await User.findOne({email}).select("+password");
        if (!user) {
            errorHandler(null, userNotFound, 404, res);
            return;
        }
        

        const validPassword = bcrypt.compare(password, user.password);
        if (!validPassword) {
            errorHandler(null, incorrectCredentials, 401, res);
            return;
        }


        const token = jwt.sign(
            {id : user._id}, 
            process.env.JWT_SECRET
        );
        await user.save();
        return Response(token, loginSuccess, 200, res);
    } catch (error) {
        errorHandler(error, null, 500, res);
    }
}

const deleteUser = async(req, res) => {
    try {
        const userId = req.user._id; // from auth middleware
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            errorHandler(null, userNotFound, 404, res);
            return;
        }
        return Response(null, userDeleted, 202, res);
    } catch (error) {
        errorHandler(error, null, 500, res);
        return;
    }
}

export {registerUser, loginUser, deleteUser};