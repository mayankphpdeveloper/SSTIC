import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach user info to request object
        next(); // Move to the next middleware or route handler
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;
