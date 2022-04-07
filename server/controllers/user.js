import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signin = (req, res) => {
    console.log("signin");
};
const signup = async (req, res) => {
    // get inputed data
    const { name, email, password, confirmPassword } = req.body;
    try {
        // find user with inputed email and if eixt return error
        const user = await User.findOne({ email });
        if (user)
            return res.status(400).json({ message: "email already used" });

        // check is password and password match
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
        const token = jwt.sign(
            { id: result._id },
            "e36700c55ba18776957f52cac32b03f2d2befa5214c9b201e0c99a1092e49e26cd4ad02d557b72a3ccc192fe7dba3e143bc4717dae60c27e328fb40ac70307e5"
        );
        console.log(token);

        return res.status(201).json({ result, token });
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" });
    }
};
export { signin, signup };
