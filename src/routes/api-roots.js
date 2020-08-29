const express = require('express');
const router = express.Router();
const { twitter } = require('../tw/funcis/funcis');

router.post('/add', async (req,res) => {
    	const {body} = req;
	console.log("Haciendo Twbody");
	let myTweet = body.tweet;
	const tweeting = new twitter(myTweet)
	console.log(myTweet);
	await tweeting.tweeteando();	
	res.send("resolved");
});

module.exports = router;
