const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];


const myWatchedSeriesLength = myWatchedSeries.length;

//const myWatchedSeriesSentence = myWatchedSeries[0] + "," + myWatchedSeries[1] + "  and" + myWatchedSeries[2];

const myWatchedSeriesSentence = "${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}"
console.log(myWatchedSeriesSentence);

const sentence = "I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}";
console.log(sentence);


//PART II

myWatchedSeries[2] = "friends"


myWatchedSeries.push("brooklyn Nine-Nine");

myWatchedSeries.unshift("doctor who");

delete myWatchedSeries[1];

const moneyHeist = myWatchedSeries[2];
console.log(moneyHeist[2]);


console.log(myWatchedSeries)