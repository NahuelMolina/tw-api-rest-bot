const config = require('../config');
const twit = require('twit');
const t = new twit(config);
    

console.log("this is the funcis.js file");

exports.twitter = class twitter {
    
    constructor(tweet,tag,canMax){
        this.tweet = tweet;
        this.tag = tag;
        this.canMax = canMax;
    };

    tweeteando(){
        let params = {
            status:this.tweet
        };
        
        t.post('statuses/update',params,(err)=>{
            console.log('inside of t.post()');  
        });
    };

};

exports.rTweet_like =  class rTweet_like {
    constructor(tag,cant){
        this.tag = tag;
        this.cant = cant;
    }
    rTweeteando(){
        let options = {
            q:this.tag,
            result_type:'recent'
        };
        t.get('search/tweets',options,async (err,data)=>{
            let i = 0;
            let tweets = [];
            tweets = data.statuses;
                
            for(i=0;i<this.canMax;i++){
                let params = {
                    id:tweets[i].id_str,
                    screen_name:tweets[i].user.screen_name
                };

                console.log(`Thats user ${i}: ${params.screen_name}`);

                t.post('statuses/retweet/:id',params, ()=> {
                    console.log(`Rt dado a id: @${params.screen_name}`);
                });
            };
    
        });
    };

    likeTweets(){
        let options = {
        
        };

        t.get('search/tweets',options,()=>{
            t.post('favorites/create',()=>{
                
            });
        });
    }
};
