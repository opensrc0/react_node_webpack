
// const enableCors = (req, res, next) => {
    
//     // CORS headers
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

//     // Set custom header for CORS
//     res.header("Access-Control-Allow-Headers", "Authorization,Content-type,Accept,X-Access-Toke,X-Key");
//     if(req.method == "OPTIONS") {
//         res.status(200).end();
//     } else {
//         next();
//     }
// }

// module.exports = enableCors;