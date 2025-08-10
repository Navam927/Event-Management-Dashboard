// middleware/auth.js
import jwt from "jsonwebtoken";
import errorHandler from "../utils/errorHandler.js";
import User from "../models/userModel.js";
import { invalidToken, tokenMissing, userNotFound } from "../utils/message.js";

const authMiddleware = async (req, res, next) => {
    try {
        // Check for Authorization header
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return errorHandler(null, tokenMissing, 401, res);
        }

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return errorHandler(null, userNotFound, 404, res);
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        return errorHandler(error, invalidToken, 401, res);
    }
};

export default authMiddleware;