import User from "../models/User.mjs"
import jwt from 'jsonwebtoken';

const MaxAge = 2 * 24 * 60 * 60;
const CreateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: MaxAge });
}
const createOneUser = (
    async (req, res) => {
        try {
            const usr = await User.create(req?.body);
            if (!usr) {
                return res.status(404).json({ message: "Could not create a user. Possible attempt of dublicating a user email (Email may already be in use)" });
            }
            const token = CreateToken(usr._id);
            res?.cookie('jwt', token, { httpOnly: true, maxAge: MaxAge * 1000 });
            res.status(200).json({ user: usr._id });
        } catch (error) {
            if (error?.code === 11000 && error?.message.toLocaleLowerCase().includes("E11000 duplicate key".toLocaleLowerCase())) {
                return res.status(404).json({ message: "Email already in use. Register with a different email" });
            }
            res.status(404).json({ message: error?.message });
        }
    }
);

const loginUser = (

    async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.login(email, password);
            const token = CreateToken(user._id);
            res?.cookie('jwt', token, { httpOnly: true, maxAge: MaxAge * 1000 });
            res.status(200).json({ user: user._id });
        } catch (error) {
            console.log(error)
            res.status(404).json({ message: error?.message });
        }
    }
)

const getProfile = (
    (req, res) => {
        const token = req.cookies.jwt;
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
                if (err) {
                    return res.status(400).json({ auth: false, user: null });
                }
                const Usr = await User.findById(decodedToken.id);
                if (Usr) {
                    return res.status(200).json({ auth: true, user: Usr });
                }
                return res.status(400).json({ auth: true, user: null });

            });

        } else {
            res.status(400).json({ auth: false, user: null });
        }
    }
)

export { createOneUser, loginUser,getProfile };