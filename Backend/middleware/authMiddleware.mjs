import jwt from 'jsonwebtoken';

const reqAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(400).json({ auth: false, id: "" });
            }
            next();
            //res.status(400).json({ auth: true, id: decodedToken.id });
        });

    }else{
        res.status(400).json({ auth: false, id: "" });
    }

}
export default reqAuth;