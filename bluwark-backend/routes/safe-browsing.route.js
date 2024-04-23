const express = require("express");
const router = express.Router();
const request = require("request");
require("dotenv").config();

const apiKey = process.env.SAFE_BROWSING_KEY;
const apiUrl = "https://safebrowsing.googleapis.com/v4/threatMatches:find";

router.post("/check-url", (req, res) => {
	const { url } = req.body;

	const payload = {
		client: {
			clientId: process.env.SAFE_BROWSING_KEY,
			clientVersion: "1.0.0",
		},
		threatInfo: {
			threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
			platformTypes: ["ALL_PLATFORMS"],
			threatEntryTypes: ["URL"],
			threatEntries: [{ url }],
		},
	};

	const options = {
		url: apiUrl,
		qs: { key: apiKey },
		json: payload,
	};

	request.post(options, (error, response, body) => {
    if (error) {
        console.error('Error checking URL:', error);
        res.status(500).json({ error: 'Error checking URL' });
    } else {
        console.log('Response:', body);
        if (body && body.matches && body.matches.length > 0) {
            const { threatType } = body.matches[0];
            const message = threatType === 'MALWARE'
                ? 'Malware detected'
                : threatType === 'SOCIAL_ENGINEERING'
                ? 'Social engineering threat detected'
                : 'Unknown threat detected';

            res.json({ safe: false, threatType, message });
        } else {
            res.json({ safe: true, message: 'The URL is safe to visit' });
        }
    }
});


});

module.exports = router;
