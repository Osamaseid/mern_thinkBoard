import { RateLimiter } from 'upstash-ratelimit';
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

//create a rate limitter : 10 requests per minute
dotenv.config();
const rateLimiter = new RateLimiter({
    limiter: RateLimiter.fixedWindow(10, '60 s'),
    redis: Redis.fromEnv(),
});

export default rateLimiter;