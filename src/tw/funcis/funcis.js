const config = require('../config');
const twit = require('twit');
const t = new twit(config);

console.log("this si funcis.js");
exports.twitter = class twitter {
	
	constructor(tweet){
		this.tweet = tweet;
	};

	tweeteando(){
		
		t.post('statuses/update',{status:this.tweet},(err)=>{
			console.log('inside of t.post()');	
		});
	};
};
