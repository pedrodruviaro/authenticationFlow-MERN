const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    // if's before verify => save performance (jwt.verify is heavely memory consuming)

    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).json({ error: "No token provided " });

    const parts = authHeader.split(" ");

    if (!parts.length === 2)
        return res.status(401).json({ error: "Token error" });

    const [word, token] = parts;

    if (!/^Bearer$/i.test(word))
        return res.status(401).json({ error: "Token error" });

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: "Invalid token" });

        req.user = decoded;
        next();
    });
};
