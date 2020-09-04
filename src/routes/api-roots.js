const express = require('express');
const router = express.Router();
const { twitter, rTweet_like } = require('../tw/funcis/funcis');

router.post('/add', (req,res) => {
    const {body} = req;
    const myTweet = body.tweet;
    
    const tweeting = new twitter(myTweet);
    tweeting.tweeteando();     

    res.redirect('/');	
    res.send("resolved");
      
});

router.post('/rtweet', async (req,res)=> {
	const { body } = req;
    const cant = body.cant;
    const tag = body.tag;

    const rTweeted = new rTweet_like(tag,cant);
    await rTweeted.rTweeteando();

    res.redirect('/');
    res.end();
});

router.post('/likes', async (req,res)=> {
	const { body } = req;
	
    if (body){		
		var myTag = body.tag;
		var cant = body.cant;
	};
    
	const liked = new rTweet&like(myTag,cant);
    await liked.likeTweets();

    res.send('listening');
});

module.exports = router;
