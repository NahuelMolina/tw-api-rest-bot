const config = require('./config');
const twit = require('twit');
const t = new twit(config);
/*Me gustan los colorcitos en visual studio code*/

var baseVerific = [];
var j = 0;

function sleep(miliseconds) {
  seconds = miliseconds * 1000;
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < seconds);
}

function reTweet(tagnew) {

  let tag = '#rock';
  tag = tagnew;
  let params = {
    q:tag,
    result_type:'recent',
    count:100

  }

  t.get('search/tweets',params,(err,data,res) => {
    let tweets = data.statuses;
    let i = 0;
    if(!err){
      for(let dat of tweets){ 
        i++;
        j++;
        if(i==5){
          console.log(' ');
          funqui(baseVerific);
          break;
        }
        const info = {
          screen_name:dat.user.screen_name
        };
        t.post('statuses/retweet/:id', info, (err,data,res) => {
            try{
                console.log("RT dado a: @" + dat.user.screen_name);
                //console.log('Text en ' + dat.text).trim();
                baseVerific[j] = dat.user.screen_name;
            }catch(err){
                console.log('Se ha producido un error' + err);
            }
        });
      }
    }})
};

function funqui(){
  
    for(j=5;j<100;j++){
      if(baseVerific[j] == dat.user.screen_name){
        tag = '#anime'
        reTweet();
      }
    }
  
}

console.log("Esto no deberia escribirse");
console.log("Esto menos");


function seguirCuenta() {

  let params = {
    q:['#concept '],
    result_type:'recent',
    count:100
  }

  t.get('search/tweets',params,(err,data,res) => {
    let tweets = data.statuses;
    let i = 0;
    if(!err){
      for(let dat of tweets){ 
        i++;

        if(i>5){
          console.log(' ');
          break;
        }

        const info = {
          screen_name: dat.user.screen_name
        };

        t.post('friendships/create',info,(err, res) => {
          try {
            console.log("Has seguido a: " + dat.user.screen_name);
          }catch(err){
            console.log("el error: " + err);
          }
          
        });
      }
      console.log(' '); 
    }
  })
};

function meGusta(tweet) {
    //if (randomNumber() < prob_mg && tweet.user.followers_count>min_followers && (mg_diarios_actuales<mg_diarios) && tweet.entities.hashtags.length<3) {
        
      let params = {
        q:['#concept '],
        result_type:'recent',
        count:100
      }

      t.get('search/tweets',params,(err,data,res) => {
        
          tweets = data.statuses
          let i = 0;
          try{
              for(let tweet of tweets){

                i++;

                if (i>5){
                  break;
                }

                let obj = {
                  screen_name: tweet.user.screen_name
                }

                t.post("favorites/create", obj, (err,data,res) => {
                  try{
                    console.log('Me gusta a @' + obj.screen_name);
                  }catch(err){
                    console.log('Error: ' + err);
                  } 
                });
              }
          }catch(err){
              console.log("Este es un grave erro pijo: " + err);
      }
        
        
      });
      
  //}      
};

 

let objet = {
  fw: seguirCuenta(),
  rt: reTweet(),
  mg: meGusta(),
  time: 5,
  sleep: sleep(this.time)
}




