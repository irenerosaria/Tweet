var package=[];
var COUNTER=0;


exports.addTweet=function (param1,param2,param3) {
	var tweet={
        author: param1,
        comment: param2,
        date:param3,
        id: COUNTER++
    };
	package.push(tweet);
}

exports.getPackage=function(){
	return package;
}

exports.findTweetByAuthor = function(author) { 
	var Twe=[];
    for(var tweet of package) {
        if(tweet.author === author) {
            Twe.push(tweet);
        }
    }
    return Twe;
}

exports.deleteById=function(id){
	for (var i = 0; i <package.length; i++) {
		if(package[i].id===id){
			package.splice(i,1);
		}
	}

}

exports.reset = function() {
    package = [];
    COUNTER = 0;
    return package;
}


exports.findTweetByWord = function(word) { 
	var Twe=[];
    for(var tweet of package) {
        if(tweet.comment.indexOf(word)>-1) {
            Twe.push(tweet);
        }
    }
    return Twe;
}

this.addTweet("Alessandro Manzoni",
	"Quel ramo del lago di Como,che volge a mezzogiorno,tra due catene non interrotte di monti",Date());
this.addTweet("Giacomo Leopardi",
	"Leopardi è piccolo e gobbo,il viso ha pallido e sofferente fa del giorno notte e viceversa",Date());
this.addTweet("Giacomo Pitti",
	" presunzione di precedenza della nascita della parola orale rispetto a quella scritta",Date());
console.log(this.getPackage());
console.log(this.findTweetByAuthor("Alessandro Manzoni"));
this.deleteById(2);
console.log("parola scelta volge:",this.findTweetByWord("volge"));
console.log(this.reset());

