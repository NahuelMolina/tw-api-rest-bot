const express = require('express');
const router = express.Router();
const { twitter, rTweet_like } = require('../tw/funcis/funcis');

router.post('/add', (req,res) => {
    const {body} = req;
    const myTweet = body.tweet;
    
    const tweeting = new twitter(myTweet);
    tweeting.tweeteando();     

    res.redirect('/index');	
    res.send("resolved");
      
});

router.post('/rtweet', async (req,res)=> {
	const { body } = req;
    console.log(body);
    const cant = body.cant;
    const tag = body.tag;

    const rTweeted = new rTweet_like(tag,cant);
    await rTweeted.rTweeteando();

    res.redirect('/index');
    res.end();
});

router.post('/likes', async (req,res)=> {
	const { body } = req;
    console.log(body);	
    if (body){		
		var myTag = body.tag;
		var cant = body.cant;
	};
    
	const liked = new rTweet_like(myTag,cant);
    await liked.likeTweets();
    

    res.redirect('/index');
    res.end();
});

module.exports = router;
