import jwt from "jsonwebtoken";
import User from "../Models/User.js";
const auth = async (req, res, next) => {
    try {
        let token;

        // check is token exist
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            // remove Bearer
            token = req.headers.authorization.split(" ")[1];
        }

        // if token does not exist return 403
        if (!token) {
            return res.status(401).json({ message: "not authorized" });
        }
        try {
            // decode token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // find user with deocded id
            const user = await User.findById(decoded.id);

            // if user not found return 404
            if (!user) {
                return res.status(404).json({ message: "invalid token" });
            }
            next();
        } catch (error) {
            return res.status(403).json({ message: error.message });
        }
    } catch (error) {
        return res.status(500).json({ message: "server error" });
    }
};
export default auth;
