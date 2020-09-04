const express = require('express');
const router = express.Router();

router.get('/' , (req,res) => {
    res.render('index');
    console.log(`Not err`);
    res.end();
});

router.get('/posTweet', (req,res)=>{
        res.render('tweet');
        console.log(`Without error`);
	res.end();
});

router.get('/likeTweets', (req,res) =>{
    res.render('likear');
});

router.get('/rTweets', (req,res)=>{
    res.render('rTweets');
});



module.exports = router;

