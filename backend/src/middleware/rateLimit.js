import rateLimiter from "../config/upstash";


const rateLimit = (req, res, next) => {
    rateLimiter.limit('global', 10, '1m')
    .then(() => {
        next();
    })
    .catch(() => {
        res.status(429).json({message: "Too many requests, please try again later."});
    });
    
};

export default rateLimit;