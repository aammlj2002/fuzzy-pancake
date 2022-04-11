import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signin = async (req, res) => {
    // get inputed data
    const { email, password } = req.body;

    try {
        // find user with email
        const user = await User.findOne({ email });

        // if user does not exist return error
        if (!user)
            return res.status(404).json({ message: "User doesn't exist" });

        // check inputed password and password is match
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword)
            return res.status(400).json({ message: "invalid credentials" });

        // generate jwt token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });
        const refreshToken = jwt.sign(
            { id: user._id },
            process.env.JWT_REFRESH_SECRET
        );
        return res.status(200).json({ result: user, token, refreshToken });
    } catch (error) {
        return res.status(500).json({ message: "some thing went wrong" });
    }
};
const signup = async (req, res) => {
    // get inputed data
    const { name, email, password, confirmPassword } = req.body;
    try {
        // find user with inputed email and if eixst return error
        const user = await User.findOne({ email });
        if (user)
            return res.status(400).json({ message: "email already used" });

        // check is password and confirm password match
        if (password !== confirmPassword)
            return res.status(400).json({ message: "password do not match" });

        // encrypt password, 12 is salt rounds
        const hashedPassword = await bcrypt.hash(password, 12);

        // store user in database
        const result = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // generate jwt token
        const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });

        return res.status(201).json({ result, token });
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
    }
};
const refreshToken = (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (refreshToken === null)
        res.status(403).send({ message: "not authenicated" });
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
        if (err) res.status(401).send({ message: err.message });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });
        res.status(200).json({ token });
    });
};
export { signin, signup, refreshToken };
