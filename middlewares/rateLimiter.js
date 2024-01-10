const rateLimit = require('express-rate-limit');

// only 100 request allow per window in 1 minute
const request_limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 100, 
});

module.exports = request_limiter